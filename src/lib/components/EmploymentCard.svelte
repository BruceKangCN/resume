<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import { formatPeriod } from "$lib";
  import Card from "./Card.svelte";
  import Content from "./Content.svelte";

  interface Props {
    company: string;
    start: Date;
    end?: Date;
    position: string;
    desc: string;
  }

  let { company, start, end, position, desc }: Props = $props();
</script>

<Card>
  {#snippet header()}
    <div class="grid grid-cols-2 grid-rows-2">
      <div class="rsm-card-cell col-span-2">
        <span class="rsm-card-label">{m.companyLabel()}</span>
        <span>{company}</span>
      </div>

      <div class="rsm-card-cell">
        <span class="rsm-card-label">{m.periodLabel()}</span>
        <span>{formatPeriod(start, end)}</span>
      </div>

      <div class="rsm-card-cell">
        <span class="rsm-card-label">{m.positionLabel()}</span>
        <span>{position}</span>
      </div>
    </div>
  {/snippet}

  <Content content={desc} />
</Card>
