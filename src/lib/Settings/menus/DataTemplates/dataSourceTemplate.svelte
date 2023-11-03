<script lang="ts">
    import scenario from "@/stores/scenario/scenario";
    let { dataProviders, dataProviderInstances } = scenario;
    import { dataProviderUpdate } from "@/stores/dataproviders/dataproviderupdate";
    import { goBack } from "@/stores/scenario/settings";
    import { getViewer } from "@/stores/viewer/viewer";
    import { loadingModalOpen } from "@/stores/component_stores/modal";

    export let provider;
    const update = (remove = false) => {
        dataProviders.update((dP) => {
            for (let d = 0; d < dP.length; d++) {
                if (dP[d].id === provider.id) {
                    if (remove) {
                        delete dP[d];
                    } else {
                        dP[d] = provider;
                    }
                }
            }
            return dP.filter(Boolean);
        });

        let dPPArray = [];

        loadingModalOpen.set(true);

        dataProviderUpdate(
            $dataProviders,
            dataProviderInstances,
            dPPArray,
            getViewer()
        );

        Promise.all(dPPArray).then(() => {
            loadingModalOpen.set(false);
        });
    };
</script>

<div class="flex flex-col items-start justify-center p-2 gap-2">
    {#if provider}
        <div class="flex gap-2 w-full justify-end items-center mb-2">
            <div style="font-size:.6rem"
                class="flex flex gap-1 p-1  rounded bg-red-800 whitespace-nowrap"
            >
                <div>Type:</div>
                <div>{provider.type}</div>
                {#if provider.type === "OMMDataProvider"}
                <div>(IPFS)</div>
                {/if}
            </div>
        </div>
        {#if provider.type === "OMMDataProvider"}
            <div class="flex flex-col gap-2">
                SATCAT:
                <input
                    class="bg-black p-2 border rounded"
                    bind:value={provider.satcatPath}
                />
            </div>
            <div class="flex flex-col gap-2">
                OMM:
                <input
                    class="bg-black p-2 border rounded"
                    bind:value={provider.ommPath}
                />
            </div>
        {/if}
        <div class="flex gap-2 self-end mt-4 cursor-pointer">
            <div
                class="bg-slate-800 hover:bg-blue-900 text-white flex p-2 rounded cursor-not-allowed"
                on:click={(e) => {
                    return;
                    update();
                    goBack();
                }}
            >
                Update
            </div>
            <div
                class="bg-red-900 hover:bg-red-700 text-white flex p-2 rounded cursor-not-allowed"
                on:click={(e) => {
                    return;
                    update(true);
                    goBack();
                }}
            >
                Remove
            </div>
        </div>
    {/if}
</div>
