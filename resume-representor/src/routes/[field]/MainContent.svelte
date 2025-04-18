<script lang="ts">
    import EmploymentCard from "$lib/components/EmploymentCard.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import Title from "$lib/components/Title.svelte";
    import { m } from "$lib/paraglide/messages";

    interface Props {
        intro: string;
        employments: App.Employment[];
        projects: App.Project[];
    }

    const { intro, employments, projects }: Props = $props();
</script>

<div class="w-full">
    <Title>{m.introTitle()}</Title>

    <p class="p-2">{intro}</p>

    <Title>{m.employmentsTitle()}</Title>

    <div class="flex flex-col gap-4">
        {#each employments as employment (employment.id)}
            <EmploymentCard
                company={employment.company_name}
                start={employment.start_date}
                end={employment.end_date}
                position={employment.position}
                desc={employment.position_desc}
            />
        {/each}
    </div>

    <Title>{m.ProjectsTitle()}</Title>

    <div class="flex flex-col gap-4">
        {#each projects as project (project.id)}
            <ProjectCard
                name={project.project_name}
                start={project.start_date}
                end={project.end_date}
                desc={project.project_desc}
            />
        {/each}
    </div>
</div>
