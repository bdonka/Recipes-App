const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const fetchRecipeData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data && data.meals) {
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