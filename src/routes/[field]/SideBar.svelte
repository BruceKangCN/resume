<script lang="ts">
    import { format } from "date-fns";
    import { m } from "$lib/paraglide/messages";

    interface Props {
        bio: App.Bio;
        positions: string[];
        salary: string;
    }

    const { bio, positions, salary }: Props = $props();

    const birthday = $derived(format(bio.birthday, "yyyy-MM-dd"));
    const positionDesc = $derived(positions.join(" / "));
</script>

<!-- <div class="h-full w-full flex flex-col items-center p-4 gap-24"> -->
<div class="root">
    <div class="w-full">
        <!-- 2 inches sized photo -->
        <img alt="avator" src="/avator.png" class="avator">
    </div>

    <div class="w-full grow flex flex-col items-center gap-24">
        <div class="block">
            <h3 class="title">{m.bioTitle()}</h3>
            <p><span class="label">{m.nameLabel()}</span>{bio.name}</p>
            <p><span class="label">{m.phoneLabel()}</span>{bio.phone}</p>
            <p><span class="label">{m.emailLabel()}</span>{bio.email}</p>
            <p><span class="label">{m.birthdayLabel()}</span>{birthday}</p>
        </div>

        <div class="block">
            <h3 class="title">{m.objectiveTitle()}</h3>
            <p><span class="label">{m.positionsLabel()}</span>{positionDesc}</p>
            <p><span class="label">{m.salaryLabel()}</span>{salary}</p>
        </div>

        <!--
            TODO: Education
            - ?
        -->
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";

    .root {
        @apply h-full;
        @apply w-full;
        @apply flex;
        @apply flex-col;
        @apply gap-4;
        @apply shadow-lg;
    }

    .avator {
        width: 35mm;
        height: 45mm;
        @apply object-cover;
        @apply mx-auto;
        @apply my-4;
    }

    .block {
        @apply w-full;
        @apply p-4;
        @apply pt-0;
        @apply text-sky-800;
    }

    .title {
        @apply text-2xl;
        @apply font-bold;
        @apply w-full;
        @apply text-center;
        @apply p-4;
        @apply text-sky-500;
    }

    .label {
        @apply font-bold;
    }
</style>
