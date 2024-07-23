<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { activeEvent } from "@/stores/events.store";
  import {
    Color,
    SpaceEntity,
    Material,
    Cartesian3,
    Plane,
    Cartesian2,
    NearFarScalar,
    GridMaterialProperty,
    ColorMaterialProperty,
    JulianDate,
    ReferenceFrame,
  } from "orbpro";
  import { type Entity } from "orbpro";
  import { scenario } from "@/stores/settings.store";
  const { selectedEntity, trackedEntity } = scenario;

  const createRandomColorMaterial = () =>
    new ColorMaterialProperty(Color.fromRandom({ alpha: 1 }));

  let activeObject: any;

  const toggleOrbit = (entity: any) => {
    if (!entity || !entity.showOrbit) return;
    const currentState = entity.orbitShowing;
    const newMaterial = createRandomColorMaterial();
    console.log(newMaterial);
    entity.showOrbit({
      show: !currentState,
      material: newMaterial,
      referenceEntity: activeObject,
    });
  };

  $: {
    toggleOrbit($selectedEntity);
  }

  const viewer = (globalThis as any).viewer;
  let originalEntityProperties = new Map();
  const proximityDistance = 8000 * 1000;

  $: activeEvent0 = $activeEvent[0];

  let gridReference: Entity | undefined = undefined;
  const gridPlane = {
    name:"noclick:grid",
    position: Cartesian3.ZERO,
    plane: {
      plane: new Plane(Cartesian3.UNIT_Z, 0),
      dimensions: new Cartesian2(5000000, 5000000),
      fill: true,
      material: new GridMaterialProperty({
        cellAlpha: 0,
        color: Color.WHITE.withAlpha(0.15),
        lineCount: new Cartesian2(25, 25),
        lineOffset: new Cartesian2(0, 0),
        lineThickness: new Cartesian2(1, 1),
      }),
      outline: true,
      outlineColor: Color.WHITE.withAlpha(0.2),
    },
    show: true,
  };

  onMount(() => {
    viewer.referenceFrame = ReferenceFrame.FIXED;

    const sDC = viewer?.dataSources.getByName("spaceaware")[0];
    if (!sDC) {
      return;
    }
    viewer.clock.currentTime = JulianDate.fromIso8601(activeEvent0.CREATED_AT);
    activeObject = sDC.entities.getById(activeEvent0.NORAD_CAT_ID.toString());
    // Add grid plane around the active satellite
    gridReference  = activeObject.children.add(gridPlane);

    sDC.entities.suspendEvents();
    // Store original properties and set the new properties for active object and nearby objects
    for (const e of sDC?.entities.values) {
      const originalProperties = {
        show: e.show,
        color: e.point?.color,
        pixelSize: e.point?.pixelSize,
        labelShow: e.label?.show,
        orbitShowing: (e as SpaceEntity).orbitShowing,
        orbitColor: Color.WHITE,
      };
      originalEntityProperties.set(e.id, originalProperties);

      if (
        e.id.toString() === activeObject.id.toString() ||
        Cartesian3.distance(
          e.position.getValue(viewer.clock.currentTime),
          activeObject.position.getValue(viewer.clock.currentTime)
        ) <= proximityDistance
      ) {
        e.show = true;
        if (e.point) {
          e.point.color = Color.WHITE;
          e.point.pixelSize =
            e.id.toString() === activeObject.id.toString() ? 10 : 5;
        }
        if (e.label) {
          e.label.show = true;
        }
        if (e.id.toString() === activeObject.id.toString()) {
          (e as SpaceEntity).showOrbit({ show: true });
          viewer.trackedEntity = e;
        } else {
          (e as SpaceEntity).showOrbit({ show: false });
        }
      } else {
        e.show = false;
      }
    }
    sDC.entities.resumeEvents();
  });

  onDestroy(() => {
    //viewer.entities.remove(gridReference);
    activeObject.children.remove(gridReference);
    const sDC = viewer?.dataSources.getByName("spaceaware")[0];
    sDC.entities.suspendEvents();

    sDC?.entities.values.forEach((e: Entity) => {
      const originalProperties = originalEntityProperties.get(e.id);
      if (originalProperties) {
        e.show = originalProperties.show;
        if (e.point) {
          e.point.color = originalProperties.color;
          e.point.pixelSize = originalProperties.pixelSize;
        }
        if (e.label) {
          e.label.show = originalProperties.labelShow;
        }
        (e as any).showOrbit({
          show: originalProperties.orbitShowing,
          color: originalProperties.orbitColor,
        });
      }
    });
    sDC.entities.resumeEvents();
    viewer.scene.render;
    originalEntityProperties.clear(); // Clear the map on destruction
  });
</script>

<div class="select-none p-4 flex flex-col items-center justify-center">
  <div class="p-2 rounded shadow-lg">
    <div><strong>NORAD Cat ID:</strong> {activeEvent0.NORAD_CAT_ID}</div>
    <div><strong>Alt Object ID:</strong> {activeEvent0.ALT_OBJECT_ID}</div>
    <div><strong>Created At:</strong> {activeEvent0.CREATED_AT}</div>
    <div><strong>Tag:</strong> {activeEvent0.TAG}</div>
    <div><strong>Result:</strong> {activeEvent0.RESULT ? "True" : "False"}</div>
    <div><strong>Priority:</strong> {activeEvent0.PRIORITY}</div>
    <div><strong>Number Flagged:</strong> {activeEvent0.NUMBER_FLAGGED}</div>
    <div><strong>Object Type:</strong> {activeEvent0.OBJECT_TYPE}</div>
    <div><strong>Object Name:</strong> {activeEvent0.OBJECT_NAME}</div>
    <div><strong>Country Code:</strong> {activeEvent0.COUNTRY_CODE}</div>
  </div>
  <div class="w-full ml-4 align-left text-sm font-[200]">
    ID: {activeEvent0.ID}
  </div>
</div>
