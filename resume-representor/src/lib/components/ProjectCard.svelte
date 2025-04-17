<script lang="ts">
    import { format } from "date-fns";
    import { m } from "$lib/paraglide/messages";

    interface Props {
        name: string;
        start: string;
        end?: string;
        desc: string;
    }

    const { name, start, end, desc }: Props = $props();

    const dateFmt = "yyyy-MM";
    const startStr = $derived(format(start, dateFmt));
    const endStr = $derived(end === undefined ? "       " : format(end, dateFmt));
    const period = $derived(`${startStr}~${endStr}`);
</script>

<div class="border rounded-lg p-2 my-4 break-inside-avoid">
    <div class="grid grid-cols-2 grid-rows-2">
        <p class="col-span-2"><span class="label">{m.projectNameLabel()}</span>{name}</p>
        <p><span class="label">{m.projectPeriodLabel()}</span>{period}</p>
    </div>

    <hr>

    <div class="flex flex-col">
        {#each desc.split(/(\r?\n){2,}/) as p, i (i)}
            <p>{p}</p>
        {/each}
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .label {
        @apply font-bold;
    }
</style>
