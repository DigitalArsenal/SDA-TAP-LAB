<script lang="ts">
  import DataSelect from "./DataSelect.svelte";
  type DataRow = {
    name: string;
    email: string;
  };

  type ColumnConfig = {
    key: keyof DataRow;
    title: string;
    isSorted: boolean;
    sortDirection: "asc" | "desc";
  };

  let data: DataRow[] = [
    { name: "John", email: "john@example.com" },
    { name: "M1ark", email: "m1ark@gmail.com" },
    { name: "J1ohn", email: "j1ohn@example.com" },
    { name: "M2ark", email: "m2ark@gmail.com" },
    { name: "J3ohn", email: "j3ohn@example.com" },
    { name: "M4ark", email: "m4ark@gmail.com" },
    { name: "J5ohn", email: "j5ohn@example.com" },
    { name: "M6ark", email: "m6ark@gmail.com" },
    { name: "John", email: "john@example.com" },
    { name: "M1ark", email: "m1ark@gmail.com" },
    { name: "J1ohn", email: "j1ohn@example.com" },
    { name: "M2ark", email: "m2ark@gmail.com" },
    { name: "J3ohn", email: "j3ohn@example.com" },
    { name: "M4ark", email: "m4ark@gmail.com" },
    { name: "J5ohn", email: "j5ohn@example.com" },
    { name: "M6ark", email: "m6ark@gmail.com" },
    { name: "John", email: "john@example.com" },
    { name: "M1ark", email: "m1ark@gmail.com" },
    { name: "J1ohn", email: "j1ohn@example.com" },
    { name: "M2ark", email: "m2ark@gmail.com" },
    { name: "J3ohn", email: "j3ohn@example.com" },
    { name: "M4ark", email: "m4ark@gmail.com" },
    { name: "J5ohn", email: "j5ohn@example.com" },
    { name: "M6ark", email: "m6ark@gmail.com" },
  ];

  let filteredData: DataRow[] = data;

  let columnsConfig: ColumnConfig[] = [
    { key: "name", title: "Name", isSorted: false, sortDirection: "asc" },
    { key: "email", title: "Email", isSorted: false, sortDirection: "asc" },
  ];

  let currentPage: number = 1;
  const itemsPerPage: number = 5;
  $: totalPages = Math.ceil(filteredData.length / itemsPerPage);

  function sortData(c: number): void {
    const column = columnsConfig[c];
    if (column.isSorted && column.sortDirection === "desc") {
      columnsConfig[c].isSorted = false;
    } else if (column.isSorted && column.sortDirection === "asc") {
      columnsConfig[c].sortDirection = "desc";
    } else {
      columnsConfig.forEach((col) => (col.isSorted = false));
      columnsConfig[c].isSorted = true;
      columnsConfig[c].sortDirection = "asc";
    }

    filteredData = data.slice().sort((a, b) => {
      const compare = a[column.key].localeCompare(b[column.key]);
      return column.sortDirection === "asc" ? compare : -compare;
    });
  }
  let searchTerm: string = "";

  function search() {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    filteredData = data.filter((row) =>
      Object.values(row).some((value) =>
        value.toLowerCase().includes(lowerCaseSearchTerm)
      )
    );
  }
</script>

<div class="w-full flex flex-col gap-2 m-2">
  <DataSelect />
  <div class="text-xs rounded-lg overflow-hidden bg-white text-black">
    <div class="tableFixHead">
      <table class="min-w-full border-collapse">
        <thead class="select-none">
          <tr>
            {#each columnsConfig as column, c}
              <th class="px-4 py-2 cursor-pointer" on:click={() => sortData(c)}>
                <div class="flex gap-1 items-center">
                  {column.title}
                  {#if column.isSorted}
                    {#if column.sortDirection === "asc"}
                      ▲
                    {:else}
                      ▼
                    {/if}
                  {/if}
                </div>
              </th>
            {/each}
          </tr>
        </thead>
        <tbody class="h-[12px] overflow-y-auto">
          {#each [...filteredData, ...Array(itemsPerPage - (filteredData.length % itemsPerPage)).fill({})].slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) as row}
            <tr>
              {#each columnsConfig as column}
                <td class="px-4 py-2">{row[column.key] || ""}&nbsp;</td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <div class="px-4 py-2 flex justify-between">
      <div>
        {filteredData.length} / {data.length}
      </div>
      <div>
        <input
          class="flex text-center border border-gray-400 rounded-xl bg-white relative left-2"
          type="text"
          bind:value={searchTerm}
          on:input={search}
          placeholder="Search" />
      </div>
      <div class="flex items-center gap-2 select-none">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="text-lg -mt-[6px]"
          on:click={() => (currentPage = Math.max(currentPage - 1, 1))}>
          ◄
        </div>
        <div class="-mt-[4px]">
          {currentPage}/{totalPages}
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="text-lg -mt-[6px]"
          on:click={() =>
            (currentPage = Math.min(currentPage + 1, totalPages))}>
          ►
        </div>
      </div>
    </div>
  </div>
</div>

<style global>
  /* Customizations based on the image you provided */
  table {
    border: 1px solid #e2e8f0;
  }
  th,
  td {
    border-bottom: 1px solid #e2e8f0;
  }
  th {
    background-color: #f7fafc;
  }
  tr {
    @apply h-2;
  }
  .tableFixHead {
    overflow: auto;
    @apply h-36;
  }
  .tableFixHead thead th {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  /* Just common table stuff. Really. */
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th,
  td {
    padding: 8px 16px;
  }
  th {
    background: #eee;
  }
</style>
