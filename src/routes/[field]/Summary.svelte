<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import { format } from "date-fns";

  interface Props {
    bio: Resume.Bio;
    intro: string;
    position: string;
    salary: string;
  }

  let { bio, intro, position, salary }: Props = $props();
  let { name, phone, email } = $derived(bio);
  let birthday = $derived(format(bio.birthday, "yyyy-MM-dd"));
</script>

<div
  class={[
    "flex",
    "flex-row",
    "gap-8",
    "px-8",
    "py-4",
    "mb-2",
    "text-slate-900",
    "bg-slate-100",
    "rounded-2xl",
    "shadow-lg",
  ]}
>
  <ul class="flex flex-auto flex-col justify-center gap-2">
    <li>{@html m.resume_summary_nameField({ name })}</li>
    <hr />
    <li>{@html m.resume_summary_birthdayField({ birthday })}</li>
    <hr />
    <li>{@html m.resume_summary_phoneField({ phone })}</li>
    <hr />
    <li>{@html m.resume_summary_emailField({ email })}</li>
    <hr />
    <li>{@html m.resume_summary_positionField({ position })}</li>
    <hr />
    <li>{@html m.resume_summary_salaryField({ salary })}</li>
  </ul>
  <figure class="mt-6">
    <img src="/photo.png" alt="applicant" class="rsm-layout-photo shadow" />
  </figure>
</div>

<article class="p-2 indent-8">{intro}</article>
