import { PAYMENT, STATUS } from "../constant";

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
  createdAt: string;
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

export interface Register {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface NewPost {
  creatorId: string;
  title: string;
  desc: string;
  price: number;
  deadline: string;
  payment: string;
  address: string;
}

export interface Token {
  id: string;
  username: string;
  email: string;
  exp: number;
}
