<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
    };

    let { children }: Props = $props();
</script>

{#snippet splitter()}
    <hr class="grow text-sky-500" />
{/snippet}

<div class="flex w-full flex-row items-center">
    {@render splitter()}
    <h3
        class={[
            "font-bold",
            "text-3xl",
            "m-4",
            "tracking-wider",
            "text-sky-600",
        ]}
    >
        {@render children()}
    </h3>
    {@render splitter()}
</div>
