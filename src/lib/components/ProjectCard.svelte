<script lang="ts">
  import { format } from "date-fns";
  import { m } from "$lib/paraglide/messages";
  import Card from "./Card.svelte";
  import Content from "./Content.svelte";

  interface Props {
    name: string;
    start: Date;
    end?: Date;
    desc: string;
  }

  let { name, start, end, desc }: Props = $props();

  const dateFmt = "yyyy-MM";
  let startStr = $derived(format(start, dateFmt));
  let endStr = $derived(end === undefined ? "       " : format(end, dateFmt));
  let period = $derived(`${startStr}~${endStr}`);
</script>

<Card>
  {#snippet header()}
    <div class="grid grid-cols-2 grid-rows-2">
      <div class="resume-card-cell col-span-2">
        <span class="resume-card-label">{m.projectNameLabel()}</span>
        <span>{name}</span>
      </div>

      <div class="resume-card-cell">
        <span class="resume-card-label">{m.projectPeriodLabel()}</span>
        <span>{period}</span>
      </div>
    </div>
  {/snippet}

  <Content content={desc} />
</Card>
