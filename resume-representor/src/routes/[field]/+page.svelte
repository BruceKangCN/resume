<script lang="ts">
    import type { PageProps } from "./$types";
    import MainContent from "./MainContent.svelte";
    import SideBar from "./SideBar.svelte";

    const { data }: PageProps = $props();
    const resume = data.resume;
</script>

<!-- an A4 width page, with 10mm padding, using flex row layout -->
<div class="w-[190mm] h-[277mm] flex flex-row">
    <div class="basis-1/3 h-full">
        <SideBar bio={resume.bio} field={resume.field} />
    </div>

    <!-- vertical ruler -->
    <div class="h-full py-8 px-2">
        <div class="h-full border-2"></div>
    </div>

    <div class="flex basis-2/3">
        <!-- TODO: main content -->
        <!-- <pre class="overflow-scroll">{JSON.stringify(resume, null, 4)}</pre> -->
        <MainContent intro={resume.field.skill_desc} {...resume} />
    </div>
</div>
