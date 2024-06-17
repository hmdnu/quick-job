import { create } from "zustand";
import { Post } from "../types";

interface ShowJobDetails {
  showJobDetails: boolean;
  jobContent: Post | null;
  isShowJobDetails: (post: Post) => void;
}

interface ModalConfirmation {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useStoreJobDetails = create<ShowJobDetails>((set) => ({
  showJobDetails: false,
  jobContent: null,
  isShowJobDetails: (content) => set({ showJobDetails: true, jobContent: content }),
}));

export const useStoreModalConfirmation = create<ModalConfirmation>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
