// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  namespace Resume {
    interface Field {
      name: string;
      intro: string;
      positions: string[];
      salary: string;
      employments: string[];
      projects: string[];
    }

    interface Employment {
      company: string;
      position: string;
      job: string;
      start: Date;
      end?: Date;
    }

    interface Project {
      name: string;
      desc: string;
      start: Date;
      end?: Date;
    }

    interface Bio {
      name: string;
      birthday: Date;
      phone: string;
      email: string;
    }
  }
}

export {};
