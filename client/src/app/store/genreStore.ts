import { IGenre } from './../../models/IGenre/IGenre';
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";


interface IGenreState {
  genre: IGenre[];
  setData: (data: IGenre[]) => void;
}
export const useGenreStore = create<IGenreState>()(devtools(immer((set) => ({
  genre: [],
  setData: (data: IGenre[]) => set((state) => {
    //   users: [...state.users, { id: Date.now(), username }], --соблюдаем иммутабельность
 state.genre=data

    }),
 
}))));
