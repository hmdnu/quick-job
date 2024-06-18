import moment from "moment";
import { Post } from "../types";

export default function sortPostsByDate(jobs: Post[]): Post[] {
  if (jobs) {
    return jobs.sort((a, b) => {
      const dateA = moment(a.createdAt);
      const dateB = moment(b.createdAt);
      return dateB.diff(dateA);
    });
  }

  return [];
}
