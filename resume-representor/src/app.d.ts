// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}

        interface Field {
            id: number;
            field_name: string;
            salary_desc: string;
            skill_desc: string;
        }

        interface Employment {
            id: number;
            company_name: string;
            position: string;
            position_desc: string;
        }

        interface Project {
            id: number;
            project_name: string;
            project_desc: string;
            start_date: Date;
            end_date: Date;
        }

        interface Bio {
            field: Field;
            employments: Employment[];
            projects: Project[];
        }
    }
}

export {};
