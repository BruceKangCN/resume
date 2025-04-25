<script lang="ts">
    const { children = () => undefined } = $props();
</script>

<div class="w-full flex flex-row items-center">
    <hr class="splitter">
    <h3 class="content">{@render children()}</h3>
    <hr class="splitter">
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .content {
        @apply font-bold;
        @apply text-3xl;
        @apply m-4;
        @apply tracking-wider;
        @apply text-sky-600;
    }

    .splitter {
        @apply grow;
        @apply text-sky-500;
    }
</style>
