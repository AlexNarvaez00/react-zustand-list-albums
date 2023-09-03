import { create } from "zustand";
import { Album, AlbumStoreType } from "../types/types";
import axios from "axios";

export const useAlbumsStore = create<AlbumStoreType>((set) => ({
  albums: [],
  loadAlbums: async () => {
    const { data } = await axios.get<Album[]>(
      "https://jsonplaceholder.typicode.com/albums",
    );
    set(() => ({ albums: data }));
  },
}));
