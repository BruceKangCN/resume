<!-- blank line splitted content -->

<script lang="ts">
    interface Props {
        content: string;
    }

    const { content }: Props = $props();
</script>

<div class="flex flex-col text-sm text-slate-700">
    {#each content.split(/(\r?\n){2,}/) as p, i (i)}
        <p class="indent-8">{p}</p>
    {/each}
</div>
