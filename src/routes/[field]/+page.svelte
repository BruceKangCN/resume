<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import type { PageProps } from "./$types";
  import EmploymentCard from "$lib/components/EmploymentCard.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import Summary from "./Summary.svelte";

  let { data }: PageProps = $props();
  let { bio, field, employments, projects } = $derived(data);

  let position = $derived(field.positions.join(" / "));
</script>

{#snippet sectionTitle(title: string)}
  {#snippet divider()}
    <div class="flex h-8 flex-auto flex-col justify-center gap-1">
      <div class="h-0.5 w-full bg-sky-300"></div>
      <div class="h-1 w-full bg-sky-300"></div>
      <div class="h-0.5 w-full bg-sky-300"></div>
    </div>
  {/snippet}

  <div class="my-4 flex w-full flex-row items-center justify-center gap-4">
    {@render divider()}
    <span class="text-2xl font-bold text-sky-700">{title}</span>
    {@render divider()}
  </div>
{/snippet}

<main class="rsm-layout-a4 mx-auto">
  <h1 class="p-4 text-center text-4xl font-bold tracking-widest">
    {m.resume_title()}
  </h1>

  <section>
    {@render sectionTitle(m.resume_summary_title())}
    <Summary {bio} intro={field.intro} {position} salary={field.salary} />
  </section>

  <section>
    {@render sectionTitle(m.resume_employments_title())}
    <div class="flex flex-col gap-4">
      {#each Object.entries(employments) as [key, employment] (key)}
        <EmploymentCard {...employment} desc={employment.job} />
      {/each}
    </div>
  </section>

  <section>
    {@render sectionTitle(m.resume_projects_title())}
    <div class="flex flex-col gap-4">
      {#each Object.entries(projects) as [key, project] (key)}
        <ProjectCard {...project} />
      {/each}
    </div>
  </section>
</main>
