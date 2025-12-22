<script lang="ts">
    import { format } from "date-fns";
    import { m } from "$lib/paraglide/messages";
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

    const dateFmt = "yyyy-MM";
    let startStr = $derived(format(start, dateFmt));
    let endStr = $derived(
        end === undefined ? "       " : format(end, dateFmt),
    );
    let period = $derived(`${startStr}~${endStr}`);
</script>

<Card>
    {#snippet header()}
        <div class="grid grid-cols-2 grid-rows-2 text-sm">
            <div class="resume-card-cell col-span-2 text-base">
                <span class="resume-card-label">{m.companyLabel()}</span>
                <span>{company}</span>
            </div>

            <div class="resume-card-cell">
                <span class="resume-card-label">{m.periodLabel()}</span>
                <span>{period}</span>
            </div>

            <div class="resume-card-cell">
                <span class="resume-card-label">{m.positionLabel()}</span>
                <span>{position}</span>
            </div>
        </div>
    {/snippet}

    <Content content={desc} />
</Card>
