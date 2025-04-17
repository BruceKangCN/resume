<script lang="ts">
    import { format } from "date-fns";
    import { m } from "$lib/paraglide/messages";

    interface Props {
        company: string;
        start: string;
        end?: string;
        position: string;
        desc: string;
    }

    const { company, start, end, position, desc }: Props = $props();

    const dateFmt = "yyyy-MM";
    const startStr = $derived(format(start, dateFmt));
    const endStr = $derived(end === undefined ? "       " : format(end, dateFmt));
    const period = $derived(`${startStr}~${endStr}`);
</script>

<div class="border rounded-lg p-2 my-4 break-inside-avoid">
    <div class="grid grid-cols-2 grid-rows-2">
        <p class="col-span-2"><span class="label">{m.companyLabel()}</span>{company}</p>
        <p><span class="label">{m.periodLabel()}</span>{period}</p>
        <p><span class="label">{m.positionLabel()}</span>{position}</p>
    </div>

    <hr>

    <p><span class="label">{m.jobDescLabel()}</span>{desc}</p>
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .label {
        @apply font-bold;
    }
</style>
