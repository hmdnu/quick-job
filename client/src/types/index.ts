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

export interface Vacancy {
  key: number;
  userImg: string;
  username: string;
  timestamp: string;
  sallary: string;
  exp: string;
  title: string;
  desc: string;
  location: string;
  status: string;
}

export interface VacancyProps {
  vacancies: Vacancy[];
  onSelect: (key: number) => void;
}

export interface VacancyDetailProps {
  vacancy: Vacancy | null;
}
