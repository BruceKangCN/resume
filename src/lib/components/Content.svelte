<!--
@component
blank line splitted content
-->

<script lang="ts">
  interface Props {
    content: string;
  }

  let { content }: Props = $props();
</script>

<div class="flex flex-col text-sm text-slate-700">
  {#each content.split(/([^\S\r\n](\r|\n|\r\n)){2,}/) as p, i (i)}
    <p class="indent-8">{p}</p>
  {/each}
</div>
