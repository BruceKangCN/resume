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

    <p
        class={[
            "p-2",
            "text-sm",
            "tracking-wide",
            "text-slate-700",
        ]}
    >
        {intro}
    </p>

    <Title>{m.employmentsTitle()}</Title>

    <div class="flex flex-col gap-4">
        {#each Object.entries(employments) as [key, employment] (key)}
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
        {#each Object.entries(projects) as [key, project] (key)}
            <ProjectCard
                name={project.name}
                start={project.start}
                end={project.end}
                desc={project.desc}
            />
        {/each}
    </div>
</div>
