# Resume

A web based resume representing app.

## Usage

1. install dependencies

    ```shell
    $ bun install
    ```

2. create `bio.toml` in `data/${locale}` directory.

    > `bio.toml` must contains fields defined by `App.Bio` in `src/app.d.ts`.

3. create `fields.toml`, `employments.toml` and `projects.toml` in the same directory.

    > These files must contains a string keyed table. The value types are defined
    > in `src/app.d.ts`:
    >
    > - `fields.toml`: `App.FieldDetail`, `employments` and `projects` are array
    >   of keys in `employments` and `projects` tables. The order of values in
    >   `employments` or `projects` arrays affects the display order in resume.
    > - `employments.toml`: `App.EmploymentDetail`
    > - `projects.toml`: `App.ProjectDetail`
    >
    > The keys are also used as key parameters in `{#each ...}` blocks.

4. preview

    ```shell
    $ bun run build
    $ bun run preview
    ```
