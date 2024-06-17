import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { API_URL } from "../constant";
import { NewPost } from "../types";

export function useGetPosts() {
  const { data, isError, isPending, error, status, isSuccess } = useQuery({
    queryKey: ["posts"],
    queryFn: () => axios.get(API_URL + "/post"),
  });

  return {
    data,
    isError,
    isPending,
    error,
    status,
    isSuccess,
  };
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  const { data, error, isPending, isError, mutate, isSuccess } = useMutation({
    mutationKey: ["createPosts"],
    mutationFn: (formData: NewPost) => axios.post(API_URL + "/post/new", formData),
    onError: (err: AxiosError) => {
      if (axios.isAxiosError(err) && err) {
        return err;
      }
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  return {
    data,
    error,
    isPending,
    isError,
    mutate,
    isSuccess,
  };
}

interface UpdatePost {
  postId: string;
  status: string;
}

export function useUpdatePost() {
  const queryClient = useQueryClient();

  const { data, error, isPending, isError, mutate, isSuccess } = useMutation({
    mutationKey: ["updatePosts"],
    mutationFn: ({ postId, status }: UpdatePost) => axios.patch(API_URL + "/post/" + postId, { status }),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  return {
    data,
    error,
    isPending,
    isError,
    mutate,
    isSuccess,
  };
}

export function useDeletePost() {
  const queryClient = useQueryClient();

  const { data, error, isPending, isError, mutate, isSuccess } = useMutation({
    mutationKey: ["deletPost"],
    mutationFn: (postId: string) => axios.delete(API_URL + "/post/" + postId),
    onError: (err: AxiosError) => {
      if (axios.isAxiosError(err) && err) {
        return err;
      }
    },

    onSettled: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  return {
    data,
    error,
    isPending,
    isError,
    mutate,
    isSuccess,
  };
}
