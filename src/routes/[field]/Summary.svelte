<!--
@component

A container to display summary information of applicant.

## Props

- `bio`: applicant's bio
- `intro`: applicant's introduction
- `objective`: job objective
- `salary`: text description of expected salary

## Assets

- `/photo.png`: applicant's photo
-->

<script lang="ts">
  import { splitParagraphs } from "$lib";
  import { m } from "$lib/paraglide/messages";
  import { format } from "date-fns";

  interface Props {
    bio: Resume.Bio;
    intro: string;
    objective: string;
    salary: string;
  }

  let { bio, intro, objective, salary }: Props = $props();
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
    <li>{@html m.resume_summary_objectiveField({ objective })}</li>
    <hr />
    <li>{@html m.resume_summary_salaryField({ salary })}</li>
  </ul>
  <figure class="mt-6">
    <img src="/photo.png" alt="applicant" class="rsm-layout-photo shadow" />
  </figure>
</div>

<article class="flex flex-col gap-1 p-2">
  {#each splitParagraphs(intro) as p, i (i)}
    <p>{p}</p>
  {/each}
</article>
