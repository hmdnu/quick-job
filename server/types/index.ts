import { STATUS, PAYMENT } from "@/constant";

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  createdAt: string;
  isWorker: boolean;
  posts: Post[];
  job?: Job;
}

export interface Post {
  id: string;
  title: string;
  desc: string;
  deadline: string;
  price: number;
  payment: PAYMENT;
  creatorId: string;
  creator: User;
  worker?: Job;
  status: STATUS;
  address: string;
}

export interface Job {
  id: string;
  title: string;
  desc: string;
  deadline: string;
  price: number;
  payment: string;
  workerId?: string;
  worker?: User;
  postId: string;
  post: Post;
}
