# Resume

A web based resume representing app.

## Usage

1. install dependencies

   ```shell
   $ bun install
   ```

2. create `bio.toml` in `data/${locale}` directory.

   > `bio.toml` must contains fields defined by `Resume.Bio` in `src/app.d.ts`.

3. create `fields.toml`, `employments.toml` and `projects.toml` in the same directory.

   > These files must contains a table with field value type defined in `src/app.d.ts`:
   >
   > - `fields.toml`: `Resume.Field`, `employments` and `projects` are array
   >   of keys in `employments` and `projects` tables. The order of values in
   >   `employments` or `projects` arrays affects the display order in resume.
   > - `employments.toml`: `Resume.Employment`
   > - `projects.toml`: `Resume.Project`
   >
   > The keys are also used as key parameters in `{#each ...}` blocks.

4. preview

   ```shell
   $ bun run build
   $ bun run preview
   ```
