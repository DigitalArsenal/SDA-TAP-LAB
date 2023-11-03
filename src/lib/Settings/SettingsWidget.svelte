<script lang="ts">
    import { Icon } from "svelte-awesome";
    import {
        chevronRight,
        chevronLeft,
        close,
        link,
        download as downloadIcon,
    } from "svelte-awesome/icons";
    //@ts-ignore
    import download from "downloadjs";
    import Globe from "./menus/Globe.svelte";
    import Data from "./menus/Data.svelte";
    import {
        activeComponents,
        activeComponentProps,
        goBack,
    } from "@/stores/settings.store";
    import {
        loadingModalOpen,
        loadingModalMessage,
    } from "@/stores/component_stores/modal";
    import {
        statusBoxOpen,
        statusBoxContent,
    } from "@/stores/component_stores/statusbox";
    export let viewer;
    import {
        writeScenarioToURL,
        loadState,
        saveState,
    } from "@/stores/scenario/scenarioops";
    let genLink;

    let menus = {
        Globe,
        Data 
        /*"Data", 
        "Imagery", 
    "Terrain",*/
    };
    const loadFile = (el) => {
        $loadingModalOpen = true;
        new Response(el.target.files[0]).text().then(
            (text) => {
                loadState(text, true)
                    .catch((e) => {
                        $loadingModalMessage = `<p class="bg-black bg-opacity-60 rounded text-sm text-center text-red-500 p-2">Error: ${e.message}</p>`;
                    })
                    .then(() => {
                        setTimeout(() => {
                            $loadingModalOpen = false;
                        }, 2000);
                    });
            },
            (err) => {
                $loadingModalMessage = err;
                setTimeout(() => {
                    $loadingModalOpen = true;
                }, 1000);

                console.error(err);
            }
        );
    };
    const exportFile = async (e) => {
        let payload = await saveState(true);
        e.stopImmediatePropagation();
        download(payload, `Orb_Backup_${Date.now()}.json`, "text/json");
    };
</script>

<div
    class="rounded border
    flex 
    flex-col 
    gap-1
    p-3 
    relative 
    pointer-events-auto 
    text-white 
    w-full
    bg-black 
    bg-opacity-75 select-none"
>
    <div class="flex w-full">
        <div class="flex w-full items-start justify-start relative -top-1">
            {#if $activeComponents.length}
                <div
                    class="text-white cursor-pointer"
                    on:click={(e) => {
                        goBack();
                    }}
                >
                    <Icon
                        data={chevronLeft}
                        style="transform:scale(.8,.8);position:relative;top:-1.5px"
                    />
                </div>
            {/if}

            <div class:ml-4={$activeComponents.length}>
                {$activeComponents.length
                    ? $activeComponents[$activeComponents.length - 1].title
                    : "SETTINGS"}
            </div>
        </div>
        <div
            on:click={(e) => {
                $statusBoxOpen = false;
                $statusBoxContent = null;
            }}
            class="text-white cursor-pointer w-8 flex justify-end flex"
        >
            <Icon data={close} />
        </div>
    </div>
    <div
        class="z-10	flex flex-col items-start  pointer-events-auto box-content bg-opacity-90 text-white overflow-hidden"
    >
        <div
            class="flex h-full flex-col w-full gap-2 border-gray-700 overflow-y-auto overflow-x-hidden"
        >
            {#if $activeComponents.length}
                <svelte:component
                    this={$activeComponents[$activeComponents.length - 1]
                        .template}
                    {viewer}
                    {...$activeComponentProps}
                />
            {:else}
                {#each Object.keys(menus) as menuItem, m}
                    <div
                        on:click={(e) => {
                            if (!~$activeComponents.indexOf(menuItem)) {
                                activeComponents.update((aCArray) => {
                                    aCArray.push({
                                        title: menuItem,
                                        template: menus[menuItem],
                                    });
                                    return aCArray;
                                });
                            }
                        }}
                        class="cursor-pointer bg-zinc-800 text-gray-200 flex gap-4 items-center p-3 border-zinc-800 hover:border-gray-300 w-full border rounded"
                    >
                        <div class="w-1">
                            <Icon
                                data={chevronRight}
                                class="pb-1"
                                style="transform:scale(1,1)"
                            />
                        </div>
                        <div class="w-32">
                            {menuItem}
                        </div>
                    </div>
                {/each}
                <div class="border-b border-gray-600 mt-2">SCENARIO</div>
                <div class="flex gap-2 mb-2 mt-2">
                    <div
                        on:click={exportFile}
                        class="pl-4 pr-4 cursor-pointer active:bg-white active:text-gray-200 hover:bg-orange-600 bg-orange-700 p-2 rounded flex items-center justify-center"
                    >
                        Export
                    </div>
                    <label
                        class="pl-4 pr-4 cursor-pointer active:bg-white active:text-gray-200 hover:bg-blue-600 bg-blue-700 p-2 rounded flex items-center justify-center"
                    >
                        Import
                        <input
                            accept=".json"
                            type="file"
                            hidden
                            on:input={loadFile}
                            multiple
                        />
                    </label>

                    <div class="flex gap-2 h-10">
                        <button
                            on:click={async (e) => {
                                genLink = await writeScenarioToURL();
                                navigator.clipboard.writeText(genLink);
                                setTimeout(() => {
                                    genLink = false;
                                }, 10000);
                            }}
                            class="pl-4 pr-4 cursor-pointer active:bg-white active:text-gray-700 hover:bg-slate-600 bg-slate-700 p-2 rounded flex gap-2 items-center justify-between"
                        >
                            <Icon style="transform:scale(.7,.7)" data={link} /> Link
                        </button>
                    </div>
                </div>
                {#if genLink}
                    <div
                        class="select-all break-words h-24 overflow-y-auto w-full border rounded mt-2 p-2 text-xs sele"
                    >
                        {genLink}
                    </div>
                {/if}
            {/if}
        </div>

        <div
            style="border-top:.5px #444444 solid;font-size:10px"
            class="w-full text-gray-400 p-2 text-xs"
        >
            <div>
                OrbUI v.e6e8f29c-c669-11ec-8dfe-5b97008b26c0, Copyright ©
                DigitalArsenal.io, Inc.
            </div>
            <div>All Rights Reserved.</div>
        </div>
    </div>
</div>
