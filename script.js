const recipeData = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
    // The JSON array provided in the task
    // (Copy the JSON array here)
  ];
  
  // Function to display the recipes on the page
  function displayRecipes(recipes) {
    const recipeCardsContainer = document.getElementById('recipeCards');
    recipeCardsContainer.innerHTML = '';
  
    recipes.forEach((recipe) => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');
  
      const image = document.createElement('img');
      image.src = recipe.imageSrc;
      image.alt = recipe.name;
  
      const name = document.createElement('h2');
      name.textContent = recipe.name;
  
      const type = document.createElement('p');
      type.textContent = `Type: ${recipe.type}`;
  
      const time = document.createElement('p');
      time.textContent = `Time: ${recipe.time}`;
  
      const rating = document.createElement('p');
      rating.textContent = `Rating: ${recipe.rating}`;
  
      const likeButton = document.createElement('button');
      likeButton.textContent = '♡'; // Heart icon
      likeButton.classList.add(recipe.isLiked ? 'liked' : 'not-liked');
      likeButton.addEventListener('click', () => {
        recipe.isLiked = !recipe.isLiked;
        likeButton.classList.toggle('liked', recipe.isLiked);
        likeButton.classList.toggle('not-liked', !recipe.isLiked);
      });
  
      recipeCard.appendChild(image);
      recipeCard.appendChild(name);
      recipeCard.appendChild(type);
      recipeCard.appendChild(time);
      recipeCard.appendChild(rating);
      recipeCard.appendChild(likeButton);
  
      recipeCardsContainer.appendChild(recipeCard);
    });
  }
  
  // Display all recipes initially
  displayRecipes(recipeData);
  


//   ------------------------
// implemet search functionality
// Function to handle search input
function handleSearchInput() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
  
    const filteredRecipes = recipeData.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm)
    );
  
    displayRecipes(filteredRecipes);
  }
  
  // Add event listener for the search input
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', handleSearchInput);

  

//   -----Add toggle button ----------

// Function to handle type filtering
function handleTypeFilter(event) {
    const filter = event.target.getAttribute('data-filter');
  
    if (filter === 'all') {
      displayRecipes(recipeData);
    } else {
      const filteredRecipes = recipeData.filter((recipe) => recipe.type === filter);
      displayRecipes(filteredRecipes);
    }
  }
  
  // Add event listener for type filter buttons
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  filterButtons.forEach((button) => button.addEventListener('click', handleTypeFilter));

//  implement filter by rating
// Function to handle rating filtering
function handleRatingFilter(event) {
    const filter = event.target.value;
  
    if (filter === 'above-4.5') {
      const filteredRecipes = recipeData.filter((recipe) => recipe.rating > 4.5);
      displayRecipes(filteredRecipes);
    } else if (filter === 'below-4.0') {
      const filteredRecipes = recipeData.filter((recipe) => recipe.rating < 4.0);
      displayRecipes(filteredRecipes);
    }
  }
  
// Add event listener for rating filter buttons
const ratingFilter = document.querySelector('.rating-filter');
ratingFilter.addEventListener('change', handleRatingFilter);

  


// -----------**********  
// Add this JavaScript code to script.js for handling the mobile drawer
const toggleDrawerButton = document.getElementById('toggleDrawer');
const drawer = document.getElementById('drawer');
const closeDrawerButton = document.getElementById('closeDrawer');

function openDrawer() {
  drawer.style.display = 'block';
}

function closeDrawer() {
  drawer.style.display = 'none';
}

toggleDrawerButton.addEventListener('click', openDrawer);
closeDrawerButton.addEventListener('click', closeDrawer);



// 