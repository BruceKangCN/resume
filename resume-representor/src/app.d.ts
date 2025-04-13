// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}

        // Note: JSON do not have `Date` type, so dates are represented as string

        interface Field {
            id: number;
            field_name: string;
            position_desc: string;
            salary_desc: string;
            skill_desc: string;
        }

        interface Employment {
            id: number;
            company_name: string;
            position: string;
            position_desc: string;
            start_date: string;
            end_date?: string;
        }

        interface Project {
            id: number;
            project_name: string;
            project_desc: string;
            start_date: string;
            end_date?: string;
        }

        interface Bio {
            name: string;
            birthday: string;
            tel: string;
            email: string;
            addr: string;
        }

        interface Resume {
            bio: Bio;
            field: Field;
            employments: Employment[];
            projects: Project[];
        }
    }
}

export {};
