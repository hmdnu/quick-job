export interface User {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  posts: any;
  isWorker: boolean;
  job: any;
  createdAt: string;
}

export interface IRegister {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}
