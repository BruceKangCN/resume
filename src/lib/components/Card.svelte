<script lang="ts">
    const { children, header } = $props();
</script>

<div class="root">
    <header class="break-inside-avoid">
        {@render header()}
    </header>

    <hr class="splitter">

    <main>
        {@render children()}
    </main>
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .root {
        @apply border;
        @apply border-slate-500;
        @apply shadow-md;
        @apply rounded-lg;
        @apply p-2;
    }

    .splitter {
        @apply text-slate-500;
    }
</style>
