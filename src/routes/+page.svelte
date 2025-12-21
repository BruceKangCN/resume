<script lang="ts">
    import { m } from "$lib/paraglide/messages";
    import { getLocale, setLocale, localizeHref } from "$lib/paraglide/runtime";

    const { data } = $props();
    const { fields } = data;

    let lang = $state(getLocale());
    $effect(() => {
        setLocale(lang);
    });
</script>

<div class="m-4 mx-auto max-w-md p-2">
    <label for="locale-selector" class="label">{m.locale()}</label>
    <select id="locale-selector" bind:value={lang}>
        <option value="en-US">English</option>
        <option value="zh-CN">简体中文</option>
    </select>

    <h2 class="label">{m.fields()}</h2>

    {#if Object.keys(fields).length > 0}
        <ul
            class={[
                "flex",
                "flex-col",
                "gap-2",
                "p-2",
            ]}
        >
            {#each Object.entries(fields) as [key, field] (key)}
                <li>
                    <a
                        href="{localizeHref(`/${key}`)}"
                        class={[
                            "block",
                            "p-2",
                            "border",
                            "shadow-md",
                            "hover:bg-zinc-200",
                        ]}
                    >
                        {field.name}
                    </a>
                </li>
            {/each}
        </ul>
    {:else}
        <p class="mx-auto text-center">{m.empty()}</p>
    {/if}
</div>

<style>
    .label {
        --at-apply: font-bold whitespace-pre;
    }
</style>
