import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { API_URL } from "../constant";
import { ILogin, IRegister } from "../types";

export function useLogin() {
  const { data, error, isPending, isError, mutate, isSuccess } = useMutation({
    mutationKey: ["login"],
    mutationFn: (formData: ILogin) =>
      axios.post(API_URL + "/user/login", formData),
    onError: (err: AxiosError) => {
      if (axios.isAxiosError(err) && err.response) {
        return err;
      }
    },
  });

  return {
    mutate,
    data,
    error,
    isPending,
    isError,
    isSuccess,
  };
}

export function useRegister() {
  const { data, mutate, isSuccess, isError, error, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: (formData: IRegister) =>
      axios.post(API_URL + "/user/register", formData),
    onError: (err: AxiosError) => {
      if (axios.isAxiosError(err) && err.response) {
        return err;
      }
    },
  });

  return {
    mutate,
    data,
    isError,
    isSuccess,
    error,
    isPending,
  };
}

export function useGetUser() {
  const { data, error, isError, isPending, mutate } = useMutation({
    mutationKey: ["user"],
    mutationFn: (id: string) => axios.get(API_URL + "/user/" + id),
    onError: (err: AxiosError) => {
      if (axios.isAxiosError(err) && err) {
        return err;
      }
    },
  });

  return {
    data,
    error,
    isError,
    isPending,
    mutate,
  };
}
