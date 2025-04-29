<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import { getLocale, setLocale } from "$lib/paraglide/runtime";

    const { data } = $props();
    const { fields } = data;

    let lang = $state(getLocale());
    $effect(() => {
        setLocale(lang);
    });
</script>

<div class="m-4 mx-auto max-w-md p-2">
    <label for="locale-selector">{m.locale()}</label>
    <select id="locale-selector" bind:value={lang}>
        <option value="en">English</option>
        <option value="zh-CN">简体中文</option>
    </select>

    <h2>{m.fields()}</h2>

    {#if Object.keys(fields).length > 0}
        <ul class="list">
            {#each Object.entries(fields) as [key, field] (key)}
                <li><a href="{lang}/{key}">{field.name}</a></li>
            {/each}
        </ul>
    {:else}
        <p class="mx-auto text-center">{m.empty()}</p>
    {/if}
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .list {
        @apply flex;
        @apply flex-col;
        @apply gap-2;
        @apply p-2;
    }
</style>
