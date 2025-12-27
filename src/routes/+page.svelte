<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import {
    getLocale,
    setLocale,
    localizeHref,
    type Locale,
  } from "$lib/paraglide/runtime";

  let { data } = $props();
  let { fields } = $derived(data);

  let locale = $state(getLocale());
  $effect(() => {
    setLocale(locale);
  });

  interface LanguageOption {
    lang: Locale;
    desc: string;
  }

  const languages: LanguageOption[] = [
    { lang: "en-US", desc: "English" },
    { lang: "zh-CN", desc: "简体中文" },
  ];
</script>

<div class="m-4 mx-auto max-w-md p-2">
  <h2 class="rsm-heading">{m.locale()}</h2>

  <menu class="flex flex-col p-2">
    {#each languages as { lang, desc } (lang)}
      <li>
        <label class="block w-full p-1 hover:bg-zinc-200">
          <input type="radio" name="lang" value={lang} bind:group={locale} />
          {desc}
        </label>
      </li>
    {/each}
  </menu>

  <h2 class="rsm-heading">{m.fields()}</h2>

  {#if Object.keys(fields).length > 0}
    <menu class="flex flex-col gap-2 p-2">
      {#each Object.entries(fields) as [key, field] (key)}
        <li>
          <!-- eslint-disable svelte/no-navigation-without-resolve -->
          <a
            href={localizeHref(`/${key}`)}
            class="block border p-2 shadow-md hover:bg-zinc-200"
          >
            {field.name}
          </a>
          <!-- eslint-enable svelte/no-navigation-without-resolve -->
        </li>
      {/each}
    </menu>
  {:else}
    <p class="mx-auto text-center">{m.empty()}</p>
  {/if}
</div>

<style>
  .rsm-heading {
    --at-apply: text-2xl font-bold;
  }
</style>
