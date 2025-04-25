<script lang="ts">
    import { format } from "date-fns";
    import { m } from "$lib/paraglide/messages";
    import Card from "./Card.svelte";
    import Content from "./Content.svelte";

    interface Props {
        name: string;
        start: Date;
        end?: Date;
        desc: string;
    }

    const { name, start, end, desc }: Props = $props();

    const dateFmt = "yyyy-MM";
    const startStr = $derived(format(start, dateFmt));
    const endStr = $derived(
        end === undefined ? "       " : format(end, dateFmt),
    );
    const period = $derived(`${startStr}~${endStr}`);
</script>

<Card>
    {#snippet header()}
        <div class="grid grid-cols-2 grid-rows-2">
            <div class="cell col-span-2">
                <span class="label">{m.projectNameLabel()}</span>
                <span>{name}</span>
            </div>

            <div class="cell">
                <span class="label">{m.projectPeriodLabel()}</span>
                <span>{period}</span>
            </div>
        </div>
    {/snippet}

    <Content content={desc} />
</Card>

<style lang="postcss">
    @import "./style.css";
</style>
