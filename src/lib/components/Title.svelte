<script lang="ts">
    const { children = () => undefined } = $props();
</script>

<div class="w-full flex flex-row items-center">
    <hr class="grow">
    <h3 class="font-bold text-3xl m-4 tracking-wider">{@render children()}</h3>
    <hr class="grow">
</div>
