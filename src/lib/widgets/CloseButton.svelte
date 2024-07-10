<script lang="ts">
    import { Icon } from "svelte-awesome";
    import { search, close } from "svelte-awesome/icons";
</script>

<div
    class="cursor-pointer relative left-[-5px] self-end rounded-full bg-gray-200 p-[2px] w-[16px] h-[16px] flex items-center justify-center"
>
    <Icon class="text-gray-600" style="transform: scale(.7,.6);" data={close} />
</div>
