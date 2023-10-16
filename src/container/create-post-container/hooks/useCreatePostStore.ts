import { create } from "zustand";

interface State {
  slug: string;
}

interface Action {
  setSlug: (value: string) => void;
}

interface ICreatePostStore extends State, Action {}

export const useCreatePostStore = create<ICreatePostStore>((set) => ({
  slug: "new-post",
  setSlug: (value) => set({ slug: value }),
}));
