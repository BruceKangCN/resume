<script lang="ts">
    import { format } from "date-fns";
    import { m } from "$lib/paraglide/messages";

    interface Props {
        bio: Resume.Bio;
        positions: string[];
        salary: string;
    }

    const { bio, positions, salary }: Props = $props();

    const birthday = $derived(format(bio.birthday, "yyyy-MM-dd"));
    const positionDesc = $derived(positions.join(" / "));
</script>

<div
    class={[
        "h-full",
        "w-full",
        "flex",
        "flex-col",
        "gap-4",
        "shadow-lg",
    ]}
>
    <div class="w-full">
        <!-- 2 inches sized photo -->
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img
            alt="photo"
            src="/photo.png"
            class={[
                "w-[35mm]",
                "h-[45mm]",
                "object-cover",
                "mx-auto",
                "my-4",
            ]}
        />
    </div>

    <div class="flex w-full grow flex-col items-center gap-24">
        <div class="block-area">
            <h3 class="title">{m.bioTitle()}</h3>
            <p><span class="label">{m.nameLabel()}</span>{bio.name}</p>
            <p><span class="label">{m.phoneLabel()}</span>{bio.phone}</p>
            <p><span class="label">{m.emailLabel()}</span>{bio.email}</p>
            <p><span class="label">{m.birthdayLabel()}</span>{birthday}</p>
        </div>

        <div class="block-area">
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

<style>
    /* FIXME */
    .block-area {
        /* --at-apply: w-full p-4 pt-0 text-sky-800; */
        --at-apply: w-full p-4 pt-0;
    }

    .title {
        /* --at-apply: text-2xl font-bold w-full text-center text-sky-500; */
        --at-apply: text-2xl font-bold w-full text-center;
    }

    .label {
        --at-apply: font-bold;
    }
</style>
