import create from 'zustand';
import { persist } from 'zustand/middleware';

 const useUserDetailStore = create(
    persist(
      (set) => ({
        character: [],
        isLoading: false,
        error: null,
        fetchUserDetail: async (id) => {
          set({ isLoading: true, error: null });
          try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            if (!response.ok) {
              throw new Error('Failed to fetch detail of character');
            }
            const data = await response.json();
            
            set({ character: data || [], isLoading: false || {} });
            
          } catch (error) {
            set({ error: error.message, isLoading: false });
          }
        },
      }),
      {
        name: 'user-detail-storage', // name of the item in the storage
        getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
      }
    )
  );

  export default useUserDetailStore;