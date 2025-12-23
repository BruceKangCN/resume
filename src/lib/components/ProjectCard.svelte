<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import { formatPeriod } from "$lib";
  import Card from "./Card.svelte";
  import Content from "./Content.svelte";

  interface Props {
    name: string;
    start: Date;
    end?: Date;
    desc: string;
  }

  let { name, start, end, desc }: Props = $props();
</script>

<Card>
  {#snippet header()}
    <div class="grid grid-cols-2 grid-rows-2">
      <div class="rsm-card-cell col-span-2">
        <span class="rsm-card-label">{m.projectNameLabel()}</span>
        <span>{name}</span>
      </div>

      <div class="rsm-card-cell">
        <span class="rsm-card-label">{m.projectPeriodLabel()}</span>
        <span>{formatPeriod(start, end)}</span>
      </div>
    </div>
  {/snippet}

  <Content content={desc} />
</Card>
