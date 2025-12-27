- [x] fix migration scripts
- [x] add `paraglide` for i18n
- [x] use file based data storage
- [x] replace TailwindCSS with UnoCSS
  - [x] migrate to UnoCSS
  - [x] remove TailwindCSS files (but keep `prettier-plugin-tailwindcss` for UnoCSS)
  - [x] _UnoCSS has some compatibility issues with Svelte_, maybe wait for solution:
    - [x] ~~cannot use color related utilities with~~ color utilities not used
          in `--at-apply` directives anymore:

      ```
      bun 1.3.5
      vite 7.3.0
      @sveltejs/vite-plugin-svelte 6.2.1
      @sveltejs/kit 2.49.2
      svelte 5.46.0
      unocss 66.5.10
      @unocss/svelte-scoped 66.5.10
      ```

- [x] add some documentation
