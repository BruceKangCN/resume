// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}

        interface FieldDetail {
            intro: string;
            positions: string[];
            salary: string;
            employments: string[];
            projects: string[];
        }

        /**
         * a type that replaces string based name array in `App.FieldDetail` with
         * string-keyed records.
         */
        type FieldInfo = Omit<App.FieldDetail, "employments" | "projects"> & {
            employments: Record<string, App.EmploymentDetail>;
            projects: Record<string, App.ProjectDetail>;
        };

        interface EmploymentDetail {
            company: string;
            position: string;
            job: string;
            start: Date;
            end?: Date;
        }

        interface ProjectDetail {
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

        interface Resume {
            field: Field;
            employments: Employment[];
            projects: Project[];
        }
    }
}

export {};
