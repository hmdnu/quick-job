import moment from "moment";

export default function formatToISO(time: string): string {
  const duration = moment.duration(parseInt(time), "minutes");

  const deadline = moment().add(duration);

  return deadline.toISOString();
}
