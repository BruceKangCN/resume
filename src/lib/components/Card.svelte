<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet;
    heading?: string;
    aside?: Snippet;
  }

  let { children, heading, aside }: Props = $props();
</script>

<div class="border">
  <h3
    class={[
      "p-2",
      "text-orange-500",
      "text-lg",
      "font-bold",
      "bg-emerald-50",
      "border-b",
      "border-black",
    ]}
  >
    {heading}
  </h3>
  <div class="flex flex-row">
    <aside class="border-r p-2">
      {@render aside?.()}
    </aside>
    <div class="flex-auto p-2">
      {@render children?.()}
    </div>
  </div>
</div>
