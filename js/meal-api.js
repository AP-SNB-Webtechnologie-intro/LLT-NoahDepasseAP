// JS code voor het maken van een knop die een maaltijd genereerd doormiddel van gebruik te maken van themealdb API
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const mealDetailsContainer = document.getElementById('meal-details');
  
    generateBtn.addEventListener('click', () => {
      generateRandomMeal();
    });
  
    function generateRandomMeal() {
      // API wordt aangeroepen met een API key
      const apiKey = '1';
      const apiUrl = `https://www.themealdb.com/api/json/v1/${apiKey}/random.php`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          displayMealDetails(data.meals[0]);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
    // Maaltijd wordt aangemaakt in zichtbaar formaat
    function displayMealDetails(meal) {
      mealDetailsContainer.innerHTML = `
        <h3>${meal.strMeal}</h3>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <p>${meal.strInstructions}</p>
        <h4>Ingredients</h4>
        <ul>
          ${getIngredientsList(meal)}
        </ul>
      `;
    }
    // Ingrediënten worden aangemaakt in zichtbaar formaat
    function getIngredientsList(meal) {
      let ingredientsList = '';
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && measure) {
          ingredientsList += `<li>${measure} ${ingredient}</li>`;
        }
      }
      return ingredientsList;
    }
  });