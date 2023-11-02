<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  //@ts-ignore
  import j$ from "jquery";
  import "datatables.net";
  import "datatables.net-dt/css/jquery.dataTables.css";

  const pageLength = 10;
  let jTable: any;

  let data = [
    { name: "John", email: "john@example.com" },
    { name: "M1ark", email: "m1ark@gmail.com" },
    { name: "J1ohn", email: "j1ohn@example.com" },
    { name: "M2ark", email: "m2ark@gmail.com" },
    { name: "J3ohn", email: "j3ohn@example.com" },
    { name: "M4ark", email: "m4ark@gmail.com" },
    { name: "J5ohn", email: "j5ohn@example.com" },
    { name: "M6ark", email: "m6ark@gmail.com" },
  ];

  onMount(() => {
    jTable = j$("#dataTable").DataTable({ pageLength, dom: "tip" });

    j$("#customSearch").on("keyup", function (e: any) {
      jTable.search(e.currentTarget.value).draw();
    });
  });

  onDestroy(() => {
    if (j$.fn.DataTable.isDataTable("#dataTable")) {
      j$("#dataTable").DataTable().destroy(true);
    }
  });
</script>

<div class="w-full flex items-center justify-center">
  <table id="dataTable" class="display w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {#each data as row}
        <tr>
          <td>{row.name}</td>
          <td>{row.email}</td>
        </tr>
      {/each}
    </tbody>
  </table>
 
</div>

<style>
  :global(#dataTable_wrapper) {
    @apply bg-white w-full pt-0 pb-2 pl-1 pr-1 rounded text-xs;
  }
  :global(#dataTable_info) {
    @apply pt-3;
  }
</style>
