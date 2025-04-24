<script lang="ts">
    import type { PageProps } from "./$types";
    import MainContent from "./MainContent.svelte";
    import SideBar from "./SideBar.svelte";

    const { data }: PageProps = $props();
    const { bio, field, employments, projects } = data;
</script>

<!-- an A4 sized (210mm x 297mm) page, with 10mm padding, using flex row layout -->
<div class="w-[190mm] h-[277mm] flex flex-row">
    <div class="basis-1/3 h-full">
        <div class="h-full overflow-y-hidden pr-4">
            <SideBar {bio} {field} />
        </div>
    </div>

    <div class="flex basis-2/3">
        <MainContent intro={field.skill_desc} {employments} {projects} />
    </div>
</div>
