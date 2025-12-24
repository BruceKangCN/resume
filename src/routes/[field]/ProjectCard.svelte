<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import { formatDate, splitParagraphs } from "$lib";
  import Card from "$lib/components/Card.svelte";

  interface Props {
    name: string;
    start: Date;
    end?: Date;
    desc: string;
  }

  let { name, start, end, desc }: Props = $props();

  let startStr = $derived(formatDate(start));
  let endStr = $derived(formatDate(end));
</script>

<Card heading={name}>
  {#snippet aside()}
    <ul class="w-56 flex-none">
      <li>{@html m.resume_project_startField({ date: startStr })}</li>
      <li>{@html m.resume_project_endField({ date: endStr })}</li>
    </ul>
  {/snippet}

  <article class="flex flex-col gap-1 text-sm text-slate-700">
    {#each splitParagraphs(desc) as p, i (i)}
      <p>{p}</p>
    {/each}
  </article>
</Card>
