<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    header: Snippet;
  }

  let { children, header }: Props = $props();
</script>

<div class="rounded-lg border border-slate-500 p-2 shadow-md">
  <header class="break-inside-avoid">
    {@render header()}
  </header>

  <hr class="my-2 text-slate-500" />

  <main>
    {@render children()}
  </main>
</div>
