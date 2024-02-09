const API_URL = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=b5ac32da&app_key=82c2fae7f3b1523741257328945178ae&q=pasta';

const fetchRecipeData = async (from = 0) => {
  try {
    const response = await fetch(`${API_URL}&from=${from}`);
    const data = await response.json();

    console.log('Recipe data:', data.hits);

    if (data && data.hits) {
      return data;
    } else {
      console.error('Invalid response format:', data);
      throw new Error('Invalid response format');
    }
  } catch (err) {
    console.error('Error fetching recipes:', err);
    throw err;
  }
};

export { fetchRecipeData };