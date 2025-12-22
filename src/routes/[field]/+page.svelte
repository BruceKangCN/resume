<script lang="ts">
  import type { PageProps } from "./$types";
  import MainContent from "./MainContent.svelte";
  import SideBar from "./SideBar.svelte";

  let { data }: PageProps = $props();
  let { bio, fieldInfo } = $derived(data);
</script>

<!-- an A4 sized (210mm x 297mm) page, with 10mm padding, using flex row layout -->
<div class="flex h-[277mm] w-[190mm] flex-row">
  <div class="h-full basis-1/3">
    <div class="h-full overflow-y-hidden pr-4">
      <SideBar
        {bio}
        positions={fieldInfo.positions}
        salary={fieldInfo.salary}
      />
    </div>
  </div>

  <div class="flex basis-2/3">
    <MainContent {fieldInfo} />
  </div>
</div>
