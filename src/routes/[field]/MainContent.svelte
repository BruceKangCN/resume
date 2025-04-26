<script lang="ts">
    import EmploymentCard from "$lib/components/EmploymentCard.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import Title from "$lib/components/Title.svelte";
    import { m } from "$lib/paraglide/messages";

    interface Props {
        fieldInfo: Resume.FieldInfo;
    }

    const { fieldInfo }: Props = $props();
    const { intro, employments, projects } = fieldInfo;
</script>

<div class="w-full">
    <Title>{m.introTitle()}</Title>

    <p class="intro">{intro}</p>

    <Title>{m.employmentsTitle()}</Title>

    <div class="flex flex-col gap-4">
        {#each Object.entries(employments) as [name, employment] (name)}
            <EmploymentCard
                company={employment.company}
                start={employment.start}
                end={employment.end}
                position={employment.position}
                desc={employment.job}
            />
        {/each}
    </div>

    <Title>{m.ProjectsTitle()}</Title>

    <div class="flex flex-col gap-4">
        {#each Object.entries(projects) as [name, project] (name)}
            <ProjectCard
                {name}
                start={project.start}
                end={project.end}
                desc={project.desc}
            />
        {/each}
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .intro {
        @apply p-2;
        @apply text-sm;
        @apply tracking-wide;
        @apply text-slate-700;
    }
</style>
