<script lang="ts">
    import { scenario } from "@/stores/scenario/scenario";
    import { Icon } from "svelte-awesome";
    import { edit, plus } from "svelte-awesome/icons";

    let { dataProviders } = scenario;
    import {
        activeComponents,
        activeComponentProps,
    } from "@/stores/scenario/settings";
    import DataSourceTemplate from "./DataTemplates/dataSourceTemplate.svelte";
    import {
        createOnLoadCallback,
        createDropErrorCallback,
    } from "@/utilities/dataloader.mjs";
    import { viewer } from "@/stores/viewer/viewer";

    const loadFile = (event) => {
        const files = event.target.files;
        const length = files.length;
        for (let i = 0; i < length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = createOnLoadCallback(viewer, file, null, true);
            reader.onerror = createDropErrorCallback(viewer, file);
            reader.readAsText(file);
        }
    };
</script>

<div class="p-4 overflow-x-hidden flex flex-col gap-2 max-h-64">
    {#each $dataProviders as provider, s}
        <div
            class="p-2 cursor-pointer border rounded p-3 flex items-center justify-start flex gap-2"
            on:click={(e) => {
                console.log();
                $activeComponentProps = {
                    provider,
                };
                activeComponents.update((aCompArray) => {
                    aCompArray.push({
                        title: `${provider.ensDomain}/${provider.ommPath}`,
                        template: DataSourceTemplate,
                    });
                    return aCompArray;
                });
            }}
        >
            <Icon data={edit} />
            {provider.ensDomain}/{provider.ommPath}
        </div>
    {/each}
    <div class="mt-2 flex" on:click={(e) => {}}>
        <label
            class="pl-4 pr-4 cursor-pointer active:bg-white active:text-gray-200 hover:bg-blue-600 bg-blue-700 p-2 rounded flex gap-2 items-center justify-center"
            ><Icon data={plus} />
            Add Data
            <input
                accept="*.*"
                type="file"
                hidden
                on:input={loadFile}
                multiple
            />
        </label>
    </div>
</div>
