import { format } from "date-fns";

export function formatPeriod(start: Date, end?: Date): string {
  const fmt = "yyyy.M.d";

  const startStr = format(start, fmt);
  const endStr = end !== undefined ? format(end, fmt) : "";

  return `${startStr} - ${endStr}`;
}
