<script lang="ts">
    const { children, header } = $props();
</script>

<div
    class={[
        "border",
        "border-slate-500",
        "shadow-md",
        "rounded-lg",
        "p-2",
    ]}
>
    <header class="break-inside-avoid">
        {@render header?.()}
    </header>

    <hr class="text-slate-500" />

    <main>
        {@render children?.()}
    </main>
</div>
