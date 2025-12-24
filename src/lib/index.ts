import { format } from "date-fns";

export function formatPeriod(start: Date, end?: Date): string {
  const fmt = "yyyy.M.d";

  const startStr = format(start, fmt);
  const endStr = end !== undefined ? format(end, fmt) : "";

  return `${startStr} - ${endStr}`;
}

export function formatDate(date?: Date): string {
  if (date === undefined) {
    return "";
  }
  return format(date, "yyyy.M.d");
}

export function splitParagraphs(content: string): string[] {
  // split by 2 or more blank lines.
  //
  // A blank line is a line with only whitespace characters.
  //
  // `\S\r\n` matches all non-whitespace characters plus `\r` and `\n`. `[^]`
  // matches all characters not in the list. `[^\S\r\n]*` matches all whitespace characters
  // except for `\r` and `\n`.
  //
  // `(\r\n|\r|\n)` find a line ending. Note that `\r\n` must be placed before
  // `\r` and `\n`, otherwise they will have higher priority, causing `\r\n`
  // never being used and `\r\n` produces 2 match groups (`\r` and `\n`).
  //
  // `[\S\r\n]*(\r\n|\r|\n)` matches a blank line. Finally, with the `{2,}`
  // quantifier, this regular expression matches 2 to infinity blank lines.
  return content.split(/([^\S\r\n]*(\r\n|\r|\n)){2,}/);
}
