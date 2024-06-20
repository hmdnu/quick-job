import { create } from "zustand";
import { Post } from "../types";

interface ShowJobDetails {
  isShowJobDetails: boolean;
  jobContent: Post | null;
  setShowJobDetails: (post: Post) => void;
}

interface ModalConfirmation {
  isConfirm: boolean;
  isOpen: boolean;
  setOpenModal: () => void;
  setCloseModal: () => void;
  setConfirm: () => void;
}

interface Search {
  posts: string;
  setPosts: (posts: string) => void;
}

interface UpdateDetailJob {
  isEmpty: boolean;
  setUpdateIsEmpty: () => void;
}

export const useStoreJobDetails = create<ShowJobDetails>((set) => ({
  isShowJobDetails: false,
  jobContent: null,
  setShowJobDetails: (content) => set({ isShowJobDetails: true, jobContent: content }),
}));

export const useStoreModalConfirmation = create<ModalConfirmation>((set) => ({
  isConfirm: false,
  isOpen: false,
  setOpenModal: () => set({ isOpen: true }),
  setCloseModal: () => set({ isOpen: false }),
  setConfirm: () => set({ isConfirm: true }),
}));

export const useStoreSearch = create<Search>((set) => ({
  posts: "",
  setPosts: (posts) => set({ posts }),
}));

export const useStoreUpdateDetailJob = create<UpdateDetailJob>((set) => ({
  isEmpty: false,
  setUpdateIsEmpty: () => set({ isEmpty: true }),
}));
