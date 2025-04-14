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

<div class="max-w-md mx-auto m-4 p-2">
    <label for="locale-selector">{m.locale()}</label>
    <select id="locale-selector" bind:value={lang}>
        <option value="en">English</option>
        <option value="zh-cn">简体中文</option>
    </select>

    <h2>{m.fields()}</h2>

    {#if fields.length > 0}
        <ul class="list">
            {#each fields as field (field.id)}
                <li><a href="{field.field_name}">{field.field_name}</a></li>
            {/each}
        </ul>
    {:else}
        <p class="text-center mx-auto">{m.empty()}</p>
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
