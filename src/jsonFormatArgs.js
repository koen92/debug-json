/**
 * This function is meant to be used in the visionmedia/debug framework. It creates a JSON string
 * with its first argument in a property called `message`, the remaining properties are assigned
 * as an array called `attachments`. When an attachments contains circular references the Error
 * is caught and the `formatError` property is set.
 * @param message string to put into the message property
 * @param [rest] Array to put into the attachments property
 * @returns [string] stringified JSON object wrapped in an array
 */
export default function jsonFormatArgs(message, ...rest) {
  const name = this ? this.namespace : undefined;
  const attachments = rest.length === 1 ? rest : undefined;

  // TODO add handling for error objects
  try {
    return [JSON.stringify({ name, message, attachments })];
  } catch (e) {
    const formatError = { name: e.name, message: e.message };
    return [JSON.stringify({ name, message, formatError })];
  }
}
