<script>
    import { Icon } from "svelte-awesome";
    import {
        chevronDown,
        chevronUp,
        chevronLeft,
        chevronRight,
        plus,
    } from "svelte-awesome/icons";

    export let rows;
    export let pageSize = 10;
    export let RowTemplate;
    export let templateVars;
    export let replaceStatus = true;
    let searchID = "xx";

    let currentPage = 1;

    let sliceStart = 0;
    let sliceEnd = 0;
    let maxPages = 0;
    let pageResults = [];

    $: {
        currentPage = Math.max(currentPage, 1);
    }

    $: {
        if (rows.length) {
            maxPages = Math.floor(rows.length / pageSize);
            sliceStart = (currentPage - 1) * pageSize;
            sliceEnd = sliceStart + pageSize;
            pageResults = [...rows.slice(sliceStart, sliceEnd)];
        } else {
            maxPages = 0;
            pageSize = 0;
            sliceStart = 0;
            sliceEnd = 0;
            pageResults = [];
        }
    }
</script>

<div
    class="relative max-h-36 h-full border border-gray-800 rounded w-full mt-2 flex flex-col gap-1 overflow-y-scroll overflow-x-hidden pt-1 pb-1"
>
    {#each pageResults as result, i}
        {#key result}
            <svelte:component
                this={RowTemplate}
                {...templateVars}
                {result}
                {searchID}
                {replaceStatus}
            />
        {/key}
    {/each}
</div>
<div class="flex w-full items-center justify-between">
    <div class="p-2 mt-2 w-1/2 flex items-center justify-between text-white">
        <div
            class="cursor-pointer"
            class:text-gray-800={!(currentPage - 1)}
            on:click={(e) => {
                if (currentPage - 1 === 0) return;
                currentPage -= 1;
            }}
        >
            <Icon data={chevronLeft} />
        </div>
        <div class="flex gap-2">
            <div>
                <input
                    type="number"
                    min="1"
                    max={maxPages}
                    class="text-center w-10 bg-black rounded"
                    bind:value={currentPage}
                    on:keyup={(e) => {
                        //@ts-ignore
                        currentPage = Math.min(e.target.value, maxPages + 1);
                    }}
                />
            </div>
            <div>/</div>
            <div class="w-10">{maxPages + 1}</div>
        </div>
        <div
            class="cursor-pointer"
            class:text-gray-800={currentPage - 1 === maxPages}
            on:click={(e) => {
                if (currentPage - 1 === maxPages) return;
                currentPage += 1;
            }}
        >
            <Icon data={chevronRight} />
        </div>
        <div
            class="flex gap-1 items-center justify-center absolute right-8 h-8"
        >
            <div class="overflow-hidden">
                {(currentPage - 1) * pageSize + (pageSize ? 1 : 0)}
            </div>
            <div>/</div>
            <div>{rows.length}</div>
        </div>
    </div>
</div>
