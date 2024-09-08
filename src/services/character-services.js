import axios from "axios";

async function fetchUsers(page, search, status, species, gender) {
    try {

               // Create a params object and add only non-empty parameters
        const params = { page };

        if (search) params.name = search;
        if (status) params.status = status;
        if (species) params.species = species;
        if (gender) params.gender = gender;

        const response = await axios.get('https://rickandmortyapi.com/api/character', { params });
        
        // Axios automatically parses the JSON response, so use response.data
        const data = response.data;
        console.log('dataa',data)
        return { characters: data.results || [], info: data.info || {}, isLoading: false, error: null };
    } catch (error) {
        return { characters: [], isLoading: false, error: error.message };
    }
}

async function fetchUserDetail(id) {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    const data = response.data;
    console.log('data detail',data);
    return({ character: data || [], isLoading: false || {} });
    
  } catch (error) {
    return({ error: error.message, isLoading: false });
  }
}

  export {
    fetchUsers,
    fetchUserDetail
  }