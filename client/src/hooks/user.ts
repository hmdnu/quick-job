import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { API_URL } from "../constant";

export function useAuth({ type }: { type: string }) {
  const { data, error, isPending, isError, mutate, isSuccess } = useMutation({
    mutationKey: [type],
    mutationFn: (formData: any) => axios.post(API_URL + "/user/" + type, formData),
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
