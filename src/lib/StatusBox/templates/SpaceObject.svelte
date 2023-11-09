<script lang="ts">
    import { Icon } from "svelte-awesome";
    import { close, chevronDown, chevronUp, fire } from "svelte-awesome/icons";
    import {
      manualClose,
      statusBoxOpen,
    } from "@/stores/component_stores/statusbox";
    import opsStatusCode from "@/lib/theme/ops_status_code.mjs";
    import { lastLoad, viewer } from "@/stores/viewer/viewer";
    import cesiumEvents, { metaEvents } from "@/stores/cesiumsync/cesiumevents";
    import * as GlobalOrb from "@/lib/external/orb.mjs";
    import {
      selectedEntityPosition,
      selectedEntityVelocity,
    } from "@/stores/livedata/entityposvel";
    import {
      enableLivePosVel,
      removeLivePosVel,
    } from "@/behaviors/calcObjectPosVel";
  
    import Settings from "@/stores/scenario/settings";
  
    let { orbit } = Settings.EntityState;
    import { onDestroy, onMount } from "svelte";
  
    export let entity: any;
    //@ts-ignore
  
    let { orbitSelect } = metaEvents;
    let { trackedEntity } = cesiumEvents;
  
    let labelVisible, coverageVisible;
  
    /**
     * Any time an orbit is selected, this component checks to see if the entity
     * associated with it has had a change in 'orbit' status.
     *
     */
  
    //@ts-ignore
    let _metadata = { ...entity.metadata };
    for (let x in _metadata) {
      if (typeof _metadata[x] === "string") {
        _metadata[x] = _metadata[x].toUpperCase();
      }
    }
  
    let {
      OBJECT_NAME,
      OBJECT_ID,
      NORAD_CAT_ID,
      MULTIPLE_NAMES,
      OBJECT_TYPE,
      OPS_STATUS_CODE,
      OWNER,
      LAUNCH_DATE,
      LAUNCH_SITE,
      DECAY_DATE,
      PERIOD,
      APOGEE,
      PERIGEE,
      RCS,
      DATA_STATUS_CODE,
      ORBIT_CENTER,
      ORBIT_TYPE,
      ARG_OF_PERICENTER,
      BSTAR,
      CHECKSUM,
      CLASSIFICATION_TYPE,
      ECCENTRICITY,
      ELEMENT_SET_NO,
      EPHEMERIS_TYPE,
      EPOCH,
      INCLINATION,
      MEAN_ANOMALY,
      MEAN_MOTION,
      MEAN_MOTION_DDOT,
      MEAN_MOTION_DOT,
      NORAD_CAT_ID: OMM_NORAT_CAT_ID,
      OBJECT_ID: OMM_OBJECT_ID,
      OBJECT_NAME: OMM_OBJECT_NAME,
      RA_OF_ASC_NODE,
      REV_AT_EPOCH,
      SOURCE,
    } = _metadata || {};
    if (entity.label) {
      //@ts-ignore
      entity.label.font = "10px sans-serif";
      //@ts-ignore
      entity.label.scale = 1;
      //@ts-ignore
      entity.label.text = `${OBJECT_NAME}`;
    }
    let types = ["PAYLOAD", "DEBRIS", "R/B", "UNKNOWN"];
  
    let nullColor = "#aaaaaa";
    let statusColor = (Object.entries(opsStatusCode)[OPS_STATUS_CODE] || [
      null,
      "#aaaaaa",
    ])[1];
  
    let row1 = [];
    $: {
      row1 = [
        ["INTL DES", OBJECT_ID],
        ["NORAD ID", NORAD_CAT_ID],
        [
          "VELOCITY",
          `${Intl.NumberFormat("en-US").format(
            //@ts-ignore
            $selectedEntityVelocity.toFixed(0)
          )} km/h`,
        ],
      ];
    }
    let row2 = [];
    $: {
      row2 = [
        ["LATITUDE", `${$selectedEntityPosition.latitude.toFixed(2)}°`],
        ["LONGITUDE", `${$selectedEntityPosition.longitude.toFixed(2)}°`],
        ["ALTITUDE", `${$selectedEntityPosition.altitude.toFixed(1)} km`],
      ];
    }
  
    let row3 = [
      ["APOGEE", `${APOGEE?.toFixed(2)} km`],
      ["PERIGEE", `${PERIGEE?.toFixed(2)} km`],
      ["PERIOD", `${PERIOD} min`],
    ];
  
    let row4 = [
      ["ECCENTRICITY", ECCENTRICITY],
      ["INCLINATION", `${INCLINATION}°`],
      ["MEAN ANOMALY", `${MEAN_ANOMALY}°`],
    ];
  
    let row5 = [
      ["ARG PERIAPSIS", `${ARG_OF_PERICENTER}°`],
      ["DRAG TERM", BSTAR],
      ["MEAN MOTION", `${parseFloat(MEAN_MOTION)?.toFixed(3)} rev/day`],
    ];
  
    let lD = new Date(LAUNCH_DATE).toUTCString().split(" ");
    let row6 = [[], [], []];
    if (lD.length) {
      row6 = [
        ["LAUNCH DATE", `${lD[1]} ${lD[2]} ${lD[3]}`],
        ["", ""],
        ["SOURCE", `${SOURCE}`],
      ];
    }
    let expanded = false;
  
    $: {
      if ($statusBoxOpen) {
        enableLivePosVel(viewer);
        viewer?.clock?.tick();
      } else {
        removeLivePosVel(viewer);
      }
    }
    let coverageGroup;
    if (entity?.entityCollection?.owner) {
      coverageGroup = entity.entityCollection.owner.coverageGroup;
    }
  
    onMount(() => {
      if (entity.label) {
        //@ts-ignore
        labelVisible = entity.label.show.getValue(null);
        //@ts-ignore
        entity.label.show = false;
      }
      if (coverageGroup.objectList.filter((e) => e.id === entity.id).length) {
        coverageVisible = true;
      }
    });
  
    onDestroy(() => {
      if (entity.label) {
        entity.label.show = labelVisible;
      }
      removeLivePosVel(viewer);
    });
  </script>
  
  <div
    style="font-size:.75rem"
    class="rounded border flex flex-col gap-2 p-4 relative text-xs pointer-events-auto text-white w-full bg-black bg-opacity-85"
  >
    <div class="flex w-full justify-end items-center h-6">
      <div class="text-left w-full text-xl">
        <div class="grid grid-cols-[15px_auto] justify-start items-center">
          <div>
            <div
              style="background:{statusColor}"
              class:border-gray-600={statusColor === nullColor}
              class="rounded w-2 h-2"
            >
              &nbsp;
            </div>
          </div>
          <div
            class:text-xs={OBJECT_NAME?.length > 20}
            class:text-sm={OBJECT_NAME?.length < 20}
          >
            {OBJECT_NAME || viewer?.selectedEntity.id} ({types[OBJECT_TYPE]}) - {OWNER ||
              "UNK"}
          </div>
        </div>
      </div>
      <div
        class="text-white cursor-pointer w-8 flex items-center justify-end h-full"
      >
        <div
          on:click={(e) => {
            $statusBoxOpen = !$statusBoxOpen;
            if (!$statusBoxOpen) {
              $manualClose = true;
            }
          }}
        >
          <Icon data={close} />
        </div>
      </div>
    </div>
    <div class="overflow-y-auto overflow-x-hidden mr-4 ml-4">
      <div class="flex flex-col gap-2 pr-1">
        <div class="flex gap-2 justify-between">
          {#each row1 as rr1, rx}
            <div class="flex flex-col gap-2">
              <div class="flex flex-col">
                <div style="font-size:11px" class="text-xs">
                  {rr1[0]}
                </div>
                <div class="text-xs">
                  {rr1[1]}
                </div>
              </div>
              <div class="flex flex-col">
                {#if row2[rx]}
                  <div style="font-size:11px" class="text-xs">
                    {row2[rx][0]}
                  </div>
                  <div class="text-xs">
                    {row2[rx][1]}
                  </div>
                {/if}
              </div>
              {#if expanded}
                <div class="flex flex-col">
                  {#if row3[rx]}
                    <div style="font-size:11px" class="text-xs">
                      {row3[rx][0]}
                    </div>
                    <div class="text-xs">
                      {row3[rx][1]}
                    </div>
                  {/if}
                </div>
                <div class="flex flex-col">
                  {#if row4[rx]}
                    <div style="font-size:11px" class="text-xs">
                      {row4[rx][0]}
                    </div>
                    <div class="text-xs">
                      {row4[rx][1]}
                    </div>
                  {/if}
                </div>
                <div class="flex flex-col">
                  {#if row5[rx]}
                    <div style="font-size:11px" class="font-light text-xs">
                      {row5[rx][0]}
                    </div>
                    <div class="text-xs">
                      {row5[rx][1]}
                    </div>
                  {/if}
                </div>
                <div class="flex flex-col">
                  {#if row6[rx]}
                    <div style="font-size:11px" class="font-light text-xs">
                      {row6[rx][0]}
                    </div>
                    <div class="text-xs">
                      {row6[rx][1]}
                    </div>
                  {/if}
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-3 p-4 pb-1 pt-1"
      on:click={(e) => {
        expanded = !expanded;
      }}
    >
      <div class="flex items-center gap-2 cursor-pointer">
        <Icon data={expanded ? chevronUp : chevronDown} scale={0.7} />
        {expanded ? "Collapse" : "Show More Data"}
      </div>
      <hr />
    </div>
    <div
      class="w-full flex gap-3 cursor-pointer items-start justify-items-start p-4 pt-1"
    >
      <div class="flex flex-col gap-2">
        <div class="flex gap-2">
          <div class="flex items-center justify-center gap-2">
            <div
              class="border rounded p-1"
              on:click={(e) => {
                if (!viewer) return;
                if ($trackedEntity?.id !== entity.id) {
                  viewer.trackedEntity = entity;
                } else {
                  viewer.trackedEntity = null;
                }
                console.log($trackedEntity !== entity);
              }}
            >
              <div
                class:bg-white={$trackedEntity?.id === entity?.id}
                class:bg-black={$trackedEntity?.id !== entity?.id}
                class="w-2 h-2"
              />
            </div>
            Track
          </div>
        </div>
        <div class="flex gap-2">
          <div class="flex items-center justify-center gap-2">
            <div
              class="border rounded p-1"
              on:click={(e) => {
                $orbitSelect = {
                  entity,
                  show: !$orbit[entity.metadata?.NORAD_CAT_ID],
                };
                if (viewer) viewer.scene.render();
              }}
            >
              <div
                class:bg-white={$orbit[entity.metadata?.NORAD_CAT_ID]}
                class:bg-black={!$orbit[entity.metadata?.NORAD_CAT_ID]}
                class="w-2 h-2"
              />
            </div>
            Show Orbit
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex gap-2">
          <div class="flex items-center justify-center gap-2">
            <div
              class="border rounded p-1"
              on:click={(e) => {
                labelVisible = !labelVisible;
                if (viewer) viewer.clock.tick();
              }}
            >
              <div
                class:bg-white={labelVisible}
                class:bg-black={!labelVisible}
                class="w-2 h-2"
              />
            </div>
            Show Label
          </div>
        </div>
        <div class="flex gap-2">
          <div class="flex items-center justify-center gap-2">
            <div
              class="border rounded p-1"
              on:click={(e) => {
                coverageVisible = !coverageVisible;
                if (!coverageVisible) {
                  coverageGroup.remove(entity);
                } else if (coverageVisible) {
                  coverageGroup.push(entity);
                }
                coverageGroup.createGeometry();
                viewer.scene.render();
              }}
            >
              <div
                class:bg-white={coverageVisible}
                class:bg-black={!coverageVisible}
                class="w-2 h-2"
              />
            </div>
            Show Coverage
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style lang="postcss">
    /* Chrome, safari */
    *::-webkit-scrollbar {
      width: 4px;
    }
  
    *::-webkit-scrollbar-thumb {
      background-color: #ddd;
    }
  </style>
  