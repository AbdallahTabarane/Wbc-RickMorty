import create from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      charecters: [],
      isLoading: false,
      error: null,
      fetchUsers: async (page,search,status,species,gender) => {
        set({ isLoading: true, error: null });
        try {
          const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${search}&status=${status}&species=${species}&gender=${gender}`);
          if (!response.ok) {
            throw new Error('Failed to fetch characters');
          }
          const data = await response.json();
          
          set({ charecters: data || [], isLoading: false });
          
        } catch (error) {
          set({ error: error.message, isLoading: false });
        }
      },
    }),
    {
      name: 'user-storage', // name of the item in the storage
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    }
  )
);


export default useUserStore;
