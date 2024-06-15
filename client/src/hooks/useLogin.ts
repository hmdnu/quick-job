import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../constant";

export async function useLogin() {
  const { data, error, isPending, isError } = useMutation({
    mutationFn: (formData) => {
      return axios.post(API_URL + "/login", formData);
    },
  });

  return {
    data,
    error,
    isPending,
    isError,
  };
}
