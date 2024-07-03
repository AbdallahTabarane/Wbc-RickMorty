import create from 'zustand';
import { persist } from 'zustand/middleware';

 const useUserLocationDetailStore = create(
    persist(
      (set) => ({
        location: [],
        isLoading: false,
        error: null,
        fetchUserLocationDetail: async (id) => {
          set({ isLoading: true, error: null });
          try {
            const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
            if (!response.ok) {
              throw new Error('Failed to fetch location detail of character');
            }
            const data = await response.json();
            
            set({ location: data || [], isLoading: false || {} });
            
          } catch (error) {
            set({ error: error.message, isLoading: false });
          }
        },
      }),
      {
        name: 'user-detail-location-storage', // name of the item in the storage
        getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
      }
    )
  );

  export default useUserLocationDetailStore;