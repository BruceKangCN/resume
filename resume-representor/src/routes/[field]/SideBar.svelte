<script lang="ts">
    import { m } from "$lib/paraglide/messages";

    interface Props {
        bio: App.Bio;
        field: App.Field;
    }

    const { bio, field }: Props = $props();
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
            <p><span class="label">{m.telLabel()}</span>{bio.tel}</p>
            <p><span class="label">{m.emailLabel()}</span>{bio.email}</p>
            <p><span class="label">{m.birthdayLabel()}</span>{bio.birthday}</p>
        </div>

        <div class="block">
            <h3 class="title">{m.objectiveTitle()}</h3>
            <p><span class="label">{m.positionsLabel()}</span>{field.position_desc}</p>
            <p><span class="label">{m.salaryLabel()}</span>{field.salary_desc}</p>
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
    }

    .title {
        @apply text-2xl;
        @apply font-bold;
        @apply w-full;
        @apply text-center;
        @apply p-4;
    }

    .label {
        @apply font-bold;
    }
</style>
