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

      const type = document.createElement('p');
      type.textContent = ` ${recipe.type}`;
  
      const recipeCardTittle = document.createElement('div');
      recipeCardTittle.classList.add('recipe-cardTittle');

      const name = document.createElement('h2');
      name.textContent = recipe.name;

      const rating = document.createElement('p');
      rating.textContent = `⭐ ${recipe.rating}`;

      const recipeCardTimeLike = document.createElement('div');
      recipeCardTimeLike.classList.add('recipe-cardTime-like');


      const time = document.createElement('h3');
      time.textContent = `🕑 ${recipe.time}`;


      
    const likeButton = document.createElement('button');
    likeButton.classList.add('like-button');
    likeButton.setAttribute('data-liked', recipe.isLiked);
    likeButton.innerHTML = `
      <svg class="heart-icon" fill="${recipe.isLiked ? 'red' : 'none'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.29 2 9.5 2 7.43 3.43 6 5.5 6c1.74 0 3.41.81 4.5 2.09C11.09 6.81 12.76 6 14.5 6 16.57 6 18 7.43 18 9.5c0 3.79-3.4 6.86-8.55 10.54L12 21.35z" 
        stroke="${recipe.isLiked ? 'red' : 'black'}" 
        stroke-width="1.5"/>
      </svg>
    `;

    likeButton.addEventListener('click', () => {
      const isLiked = recipe.isLiked;
      recipe.isLiked = !isLiked;
      likeButton.setAttribute('data-liked', !isLiked);

      const heartIcon = likeButton.querySelector('.heart-icon');
      heartIcon.setAttribute('fill', recipe.isLiked ? 'red' : 'none');
      heartIcon.setAttribute('stroke', recipe.isLiked ? 'red' : 'black');
    });

    const commentButton = document.createElement('button');
    commentButton.classList.add('comment-button');
    commentButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="none" stroke="#000" stroke-width="2" d="M21.25,17.742c0.551-0.551,0.993-1.435,0.993-2.491c0-1.057-0.442-1.94-0.993-2.491L19.5,10.5h-12L4.007,8.759C3.456,8.208,3.014,7.324,3.014,6.268c0-1.057,0.442-1.94,0.993-2.491L5.5,3.5l3,2.134h11l3-2.134L20.994,3.777c0.551,0.551,0.993,1.435,0.993,2.491c0,1.057-0.442,1.94-0.993,2.491l-1.486,1.741h-12L4.007,14.759c-0.551,0.551-0.993,1.435-0.993,2.491c0,1.057,0.442,1.94,0.993,2.491l1.486,1.741l3-2.134h11L21.25,17.742z"/>
  </svg>
  
    `;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    buttonContainer.appendChild(likeButton);
    buttonContainer.appendChild(commentButton);

  
      recipeCardTittle.appendChild(name);
      recipeCardTittle.appendChild(rating);

      recipeCardTimeLike.appendChild(time);
      recipeCardTimeLike.appendChild(buttonContainer);

      recipeCard.appendChild(image);
      recipeCard.appendChild(type);
      recipeCard.appendChild(recipeCardTittle);
      recipeCard.appendChild(recipeCardTimeLike)
  
      recipeCardsContainer.appendChild(recipeCard);
    });
  }
  
  // Display all recipes initially
  displayRecipes(recipeData);
  


//   ------------------------
//**********  implemet search functionality ********** */ 

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