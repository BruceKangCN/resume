import { format } from "date-fns";

/**
 * format period from `start` to `end` as a string.
 *
 * @see formatDate
 */
export function formatPeriod(start: Date, end?: Date): string {
  const startStr = formatDate(start);
  const endStr = formatDate(end);

  return `${startStr} - ${endStr}`;
}

/**
 * format `date` as a string.
 *
 * format `date` in `yyyy/M/d` format if it exists. returns empty string if
 * `date` is `undefined`.
 */
export function formatDate(date?: Date): string {
  if (date === undefined) {
    return "";
  }
  return format(date, "yyyy/M/d");
}

/**
 * split by blank lines.
 *
 * a blank line is a line with only whitespace characters.
 */
export function splitParagraphs(content: string): string[] {
  // `\S\r\n` matches all non-whitespace characters plus `\r` and `\n`. `[^]`
  // matches all characters not in the list. `[^\S\r\n]*` matches all whitespace
  // characters except for `\r` and `\n`.
  //
  // `(\r\n|\r|\n)` matches a line ending. Note that `\r\n` must be placed before
  // `\r` and `\n`, otherwise they will have higher priority, causing `\r\n`
  // never being used and `\r\n` produces 2 match groups (`\r` and `\n`).
  //
  // after a line ending, `[\S\r\n]*(\r\n|\r|\n)` matches a blank line. this is
  // why the regular expression needs to match at least 2 times with the `{2,}`
  // quantifier. the first time is for the line ending before the blank line.
  return content.split(/([^\S\r\n]*(\r\n|\r|\n)){2,}/);
}
