- [x] fix migration scripts
- [x] add `paraglide` for i18n
- [x] use file based data storage
- [x] replace TailwindCSS with UnoCSS
    - [x] migrate to UnoCSS
    - [x] remove TailwindCSS files (but keep `prettier-plugin-tailwindcss` for UnoCSS)
    - [ ] *UnoCSS has some compatibility issues with Svelte*, maybe wait for solution:
      - [ ] cannot use color related utilities with:

        ```
        vite 7.3.0
        @sveltejs/vite-plugin-svelte 6.2.1
        @sveltejs/kit 2.49.2
        svelte 5.46.0
        unocss 66.5.10
        @unocss/svelte-scoped 66.5.10
        ```
