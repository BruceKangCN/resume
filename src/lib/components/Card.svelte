<!--
@component

A container to display information about something.

A card has a heading on the top, a sidebar on the left and a content area on the
right.

## Snippets

- `children`: content
- `aside`: sidebar

## props

- `heading`: a heading text string
-->

<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet;
    heading?: string;
    aside?: Snippet;
  }

  let { children, heading, aside }: Props = $props();
</script>

<div class="border shadow">
  <h3
    class={[
      "p-2",
      "text-sky-900",
      "text-lg",
      "font-bold",
      "bg-slate-200",
      "border-b",
      "border-black",
      "text-shadow-xs",
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
