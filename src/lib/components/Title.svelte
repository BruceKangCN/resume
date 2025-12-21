<script lang="ts">
    const { children } = $props();
</script>

<div class="flex w-full flex-row items-center">
    <hr class="splitter" />
    <h3
        class={[
            "font-bold",
            "text-3xl",
            "m-4",
            "tracking-wider",
            "text-sky-600",
        ]}
    >
        {@render children?.()}
    </h3>
    <hr class="splitter" />
</div>

<style>
    /* FIXME */
    .splitter {
        /* --at-apply: grow text-sky-500; */
        --at-apply: grow;
    }
</style>
