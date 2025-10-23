const STORAGE_KEYS = {
  USER: 'zotbites_user',
  PANTRY: 'zotbites_pantry',
  POSTS: 'zotbites_posts'
};

const RECIPES = [
  {
    id: 'microwave-veggie-omelette',
    name: 'Microwave Veggie Omelette Mug',
    mealType: 'breakfast',
    tags: ['breakfast', 'vegetarian', '5 min'],
    costPerServing: 2.25,
    cookTime: 5,
    servings: 1,
    difficulty: 'Easy',
    ingredients: ['2 eggs', 'handful spinach', '2 tbsp shredded cheese', '2 tbsp bell pepper', 'salt', 'pepper'],
    pantryKeywords: ['eggs', 'spinach', 'cheese', 'bell pepper'],
    equipment: ['Microwave-safe mug', 'Fork'],
    steps: [
      'Whisk eggs with salt and pepper directly in the mug.',
      'Stir in chopped spinach, bell pepper, and cheese.',
      'Microwave for 90 seconds, stirring halfway through.',
      'Let stand for 30 seconds, then enjoy straight from the mug.'
    ],
    nutritionTip: 'Add frozen veggies to boost fiber and reduce food waste.',
    isVegetarian: true
  },
  {
    id: 'overnight-peanut-oats',
    name: 'Overnight Peanut Butter Oats',
    mealType: 'breakfast',
    tags: ['breakfast', 'vegetarian', 'meal prep'],
    costPerServing: 1.4,
    cookTime: 5,
    servings: 2,
    difficulty: 'Easy',
    ingredients: ['1 cup rolled oats', '1 cup milk or oat milk', '2 tbsp peanut butter', '1 tbsp chia seeds', '1 banana'],
    pantryKeywords: ['oats', 'milk', 'peanut butter', 'banana'],
    equipment: ['Jar with lid'],
    steps: [
      'Combine oats, milk, chia seeds, and peanut butter in a jar.',
      'Shake or stir until the oats are evenly coated.',
      'Refrigerate overnight and top with sliced banana in the morning.'
    ],
    nutritionTip: 'Chia seeds add plant-based omega-3s and keep you full longer.',
    isVegetarian: true
  },
  {
    id: 'sheet-pan-lemon-chicken',
    name: 'Sheet-Pan Lemon Herb Chicken & Veggies',
    mealType: 'dinner',
    tags: ['dinner', 'meal prep'],
    costPerServing: 3.75,
    cookTime: 35,
    servings: 4,
    difficulty: 'Easy',
    ingredients: ['1 lb chicken thighs', '2 cups broccoli', '1 cup baby potatoes', '1 lemon', 'olive oil', 'garlic powder'],
    pantryKeywords: ['chicken', 'broccoli', 'potatoes', 'lemon'],
    equipment: ['Sheet pan', 'Oven'],
    steps: [
      'Preheat oven to 400°F (204°C).',
      'Toss chicken, potatoes, and broccoli with olive oil, garlic powder, and lemon juice on a sheet pan.',
      'Roast for 30-35 minutes until chicken is cooked through and potatoes are tender.',
      'Squeeze fresh lemon over everything before serving.'
    ],
    nutritionTip: 'Chicken thighs stay juicy and are usually cheaper than breasts at local markets.',
    isVegetarian: false
  },
  {
    id: 'teriyaki-tofu-bowls',
    name: 'Teriyaki Tofu Bowls',
    mealType: 'dinner',
    tags: ['dinner', 'vegetarian', 'meal prep'],
    costPerServing: 3.1,
    cookTime: 25,
    servings: 3,
    difficulty: 'Medium',
    ingredients: ['14 oz firm tofu', '2 cups cooked rice', '1 cup frozen stir-fry veggies', '1/4 cup teriyaki sauce', 'green onions'],
    pantryKeywords: ['tofu', 'rice', 'frozen veggies', 'teriyaki'],
    equipment: ['Skillet', 'Paper towels'],
    steps: [
      'Press tofu for 10 minutes, then cube.',
      'Pan-fry tofu until golden, then toss with teriyaki sauce.',
      'Steam or sauté veggies and serve over rice with tofu.',
      'Garnish with sliced green onion.'
    ],
    nutritionTip: 'Swap in microwave rice packs for speed—Trader Joe’s frozen jasmine rice works great.',
    isVegetarian: true
  },
  {
    id: 'budget-veggie-fried-rice',
    name: 'Budget Veggie Fried Rice',
    mealType: 'dinner',
    tags: ['dinner', 'vegetarian', 'stovetop'],
    costPerServing: 1.9,
    cookTime: 20,
    servings: 4,
    difficulty: 'Easy',
    ingredients: ['3 cups day-old rice', '2 eggs', '1 cup frozen mixed veggies', '2 tbsp soy sauce', '1 tbsp sesame oil'],
    pantryKeywords: ['rice', 'eggs', 'frozen veggies', 'soy sauce'],
    equipment: ['Large skillet'],
    steps: [
      'Scramble eggs in a large skillet and set aside.',
      'Add sesame oil and cook frozen veggies until heated through.',
      'Stir in rice and soy sauce, frying until warmed and slightly crisp.',
      'Fold scrambled eggs back in and serve hot.'
    ],
    nutritionTip: 'Use brown rice for extra fiber or add spinach at the end for more greens.',
    isVegetarian: true
  },
  {
    id: 'dorm-quesadilla',
    name: 'Dorm Quesadilla Bar',
    mealType: 'lunch',
    tags: ['lunch', 'snack'],
    costPerServing: 1.75,
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    ingredients: ['2 large tortillas', '1 cup shredded cheese', '1/2 cup canned beans', 'salsa', 'spinach'],
    pantryKeywords: ['tortilla', 'cheese', 'beans', 'salsa'],
    equipment: ['Skillet or microwave'],
    steps: [
      'Spread cheese, beans, and spinach on half of each tortilla.',
      'Fold tortillas and toast on a skillet for 3 minutes per side or microwave until cheese melts.',
      'Serve with salsa or hot sauce.'
    ],
    nutritionTip: 'Rinse canned beans to cut sodium and add leftover veggies for crunch.',
    isVegetarian: true
  },
  {
    id: 'lentil-coconut-curry',
    name: 'One-Pot Lentil Coconut Curry',
    mealType: 'dinner',
    tags: ['dinner', 'vegan', 'one-pot'],
    costPerServing: 2.4,
    cookTime: 30,
    servings: 4,
    difficulty: 'Medium',
    ingredients: ['1 cup red lentils', '1 can coconut milk', '1 can diced tomatoes', '2 cups vegetable broth', 'curry powder', 'spinach'],
    pantryKeywords: ['lentils', 'coconut milk', 'tomatoes', 'spinach'],
    equipment: ['Pot'],
    steps: [
      'Rinse lentils and add to a pot with coconut milk, tomatoes, broth, and curry powder.',
      'Simmer for 20 minutes until lentils are soft.',
      'Stir in spinach until wilted and season to taste.'
    ],
    nutritionTip: 'Serve over microwavable rice or with naan from Trader Joe’s for a full meal.',
    isVegetarian: true
  },
  {
    id: 'pesto-chickpea-pasta-salad',
    name: 'Pesto Chickpea Pasta Salad',
    mealType: 'lunch',
    tags: ['lunch', 'vegetarian', 'meal prep'],
    costPerServing: 2.9,
    cookTime: 20,
    servings: 4,
    difficulty: 'Easy',
    ingredients: ['8 oz pasta', '1 can chickpeas', '1/3 cup pesto', '1 cup cherry tomatoes', 'spinach'],
    pantryKeywords: ['pasta', 'chickpeas', 'pesto', 'tomatoes'],
    equipment: ['Pot', 'Mixing bowl'],
    steps: [
      'Cook pasta until al dente and rinse under cold water.',
      'Combine pasta with drained chickpeas, pesto, tomatoes, and spinach.',
      'Chill for meal prep lunches.'
    ],
    nutritionTip: 'Use whole wheat pasta for extra fiber and staying power between classes.',
    isVegetarian: true
  },
  {
    id: 'loaded-sweet-potato',
    name: 'Loaded Microwave Sweet Potato',
    mealType: 'dinner',
    tags: ['dinner', 'vegetarian', 'microwave'],
    costPerServing: 2.1,
    cookTime: 12,
    servings: 1,
    difficulty: 'Easy',
    ingredients: ['1 sweet potato', '1/2 cup black beans', '2 tbsp Greek yogurt', 'hot sauce', 'green onion'],
    pantryKeywords: ['sweet potato', 'black beans', 'yogurt'],
    equipment: ['Microwave'],
    steps: [
      'Pierce sweet potato and microwave for 6-8 minutes until soft.',
      'Split open and top with beans, yogurt, and hot sauce.',
      'Finish with sliced green onion.'
    ],
    nutritionTip: 'Swap Greek yogurt for cottage cheese if that’s already in your fridge.',
    isVegetarian: true
  },
  {
    id: 'spicy-tuna-rice-bowl',
    name: 'Spicy Tuna Rice Bowl',
    mealType: 'lunch',
    tags: ['lunch', '5 min'],
    costPerServing: 2.35,
    cookTime: 8,
    servings: 2,
    difficulty: 'Easy',
    ingredients: ['2 pouches microwave rice', '1 can tuna', '2 tbsp mayo', 'sriracha', 'cucumber', 'nori'],
    pantryKeywords: ['rice', 'tuna', 'sriracha', 'cucumber'],
    equipment: ['Microwave', 'Bowl'],
    steps: [
      'Heat rice according to package instructions.',
      'Mix tuna with mayo and sriracha.',
      'Layer rice, tuna mixture, sliced cucumber, and crumbled nori in bowls.'
    ],
    nutritionTip: 'Add frozen edamame for protein and fiber boosts.',
    isVegetarian: false
  },
  {
    id: 'greek-yogurt-parfait',
    name: 'Greek Yogurt Crunch Parfait',
    mealType: 'breakfast',
    tags: ['breakfast', 'snack'],
    costPerServing: 1.6,
    cookTime: 5,
    servings: 2,
    difficulty: 'Easy',
    ingredients: ['2 cups Greek yogurt', '1 cup frozen berries', '1/2 cup granola', '1 tbsp honey'],
    pantryKeywords: ['yogurt', 'berries', 'granola', 'honey'],
    equipment: ['Cup or bowl'],
    steps: [
      'Layer yogurt, berries, and granola in cups.',
      'Drizzle with honey and serve immediately.'
    ],
    nutritionTip: 'Thaw berries in the microwave for 30 seconds if you prefer a juicier parfait.',
    isVegetarian: true
  },
  {
    id: 'energy-bites',
    name: 'No-Bake Energy Bites',
    mealType: 'snack',
    tags: ['snack', 'no-cook', 'vegetarian'],
    costPerServing: 0.9,
    cookTime: 15,
    servings: 12,
    difficulty: 'Easy',
    ingredients: ['1.5 cups oats', '1/2 cup peanut butter', '1/3 cup honey', '1/2 cup chocolate chips', '2 tbsp flax meal'],
    pantryKeywords: ['oats', 'peanut butter', 'honey', 'flax'],
    equipment: ['Bowl'],
    steps: [
      'Combine all ingredients in a bowl until evenly mixed.',
      'Roll into 1-inch balls and refrigerate for 30 minutes to set.'
    ],
    nutritionTip: 'Swap flax for chia or hemp hearts depending on what’s cheapest at the student store.',
    isVegetarian: true
  },
  {
    id: 'bean-cheese-nachos',
    name: 'Skillet Bean & Cheese Nachos',
    mealType: 'dinner',
    tags: ['dinner', 'shareable'],
    costPerServing: 2.0,
    cookTime: 15,
    servings: 3,
    difficulty: 'Easy',
    ingredients: ['tortilla chips', '1 cup shredded cheese', '1 can black beans', '1 tomato', 'jalapeño'],
    pantryKeywords: ['chips', 'cheese', 'beans', 'tomato'],
    equipment: ['Skillet', 'Oven or toaster oven'],
    steps: [
      'Layer chips, cheese, and beans in an oven-safe skillet.',
      'Bake at 375°F (190°C) for 8 minutes until cheese melts.',
      'Top with diced tomato and jalapeño.'
    ],
    nutritionTip: 'Add shredded rotisserie chicken for extra protein when on sale.',
    isVegetarian: true
  },
  {
    id: 'veggie-udon-stirfry',
    name: '10-Minute Veggie Udon Stir-Fry',
    mealType: 'dinner',
    tags: ['dinner', 'vegetarian', 'stir-fry'],
    costPerServing: 2.85,
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    ingredients: ['2 packs udon noodles', '1 cup frozen veggies', '2 tbsp soy sauce', '1 tbsp sesame oil', 'garlic'],
    pantryKeywords: ['udon', 'veggies', 'soy sauce', 'garlic'],
    equipment: ['Skillet or wok'],
    steps: [
      'Heat sesame oil and garlic in a skillet for 30 seconds.',
      'Add frozen veggies and cook until warmed.',
      'Toss in udon and soy sauce, stir-frying until noodles separate.',
      'Finish with chili flakes if desired.'
    ],
    nutritionTip: 'Use frozen stir-fry packs from Trader Joe’s or H Mart for variety.',
    isVegetarian: true
  },
  {
    id: 'garlic-shrimp-ramen',
    name: 'Garlic Butter Shrimp Ramen Upgrade',
    mealType: 'dinner',
    tags: ['dinner', '15 min'],
    costPerServing: 3.4,
    cookTime: 15,
    servings: 2,
    difficulty: 'Medium',
    ingredients: ['2 ramen packets', '8 oz shrimp', '2 cloves garlic', '2 tbsp butter', '1 cup snap peas'],
    pantryKeywords: ['ramen', 'shrimp', 'garlic', 'snap peas'],
    equipment: ['Skillet', 'Pot'],
    steps: [
      'Cook ramen noodles without the seasoning packets and set aside.',
      'Sauté garlic in butter, add shrimp, and cook until pink.',
      'Add snap peas and sauté for 2 minutes.',
      'Toss in noodles with a splash of the ramen seasoning to finish.'
    ],
    nutritionTip: 'Use frozen shrimp from Costco or Aldi for the best price per pound.',
    isVegetarian: false
  },
  {
    id: 'quick-veggie-ramen',
    name: 'Dorm Friendly Veggie Ramen',
    mealType: 'dinner',
    tags: ['dinner', 'vegan', 'microwave'],
    costPerServing: 1.6,
    cookTime: 12,
    servings: 1,
    difficulty: 'Easy',
    ingredients: ['1 instant ramen pack', '1 cup frozen mixed veggies', 'soy sauce', 'sesame oil', 'green onion'],
    pantryKeywords: ['ramen', 'veggies', 'soy sauce', 'sesame oil'],
    equipment: ['Microwave-safe bowl'],
    steps: [
      'Add ramen, seasoning packet, frozen veggies, and water to a large microwave-safe bowl.',
      'Microwave for 5-6 minutes until noodles are tender.',
      'Stir in a splash of soy sauce and sesame oil, then top with green onion.'
    ],
    nutritionTip: 'Crack in an egg after microwaving for extra protein if you have time.',
    isVegetarian: true
  }
];

const DEFAULT_POSTS = [
  {
    title: 'Trader Joe’s Soba Upgrade',
    ingredients: ['soba noodles', 'frozen gyoza dipping sauce', 'cucumber'],
    instructions: 'Mix cooked soba with dipping sauce, top with sliced cucumbers, and sprinkle furikake.',
    author: 'Jamie — Arroyo Vista',
    createdAt: '2024-01-12'
  },
  {
    title: 'Instant Pot Dorm Chili',
    ingredients: ['canned beans', 'fire roasted tomatoes', 'frozen corn'],
    instructions: 'Dump everything into an Instant Pot with taco seasoning, cook 12 minutes, serve with chips.',
    author: 'Alex — Mesa Court',
    createdAt: '2024-02-03'
  },
  {
    title: 'Air Fryer Sweet Potato Fries',
    ingredients: ['sweet potatoes', 'paprika', 'olive oil'],
    instructions: 'Toss wedges in paprika and oil, air fry at 400°F for 12 minutes shaking halfway.',
    author: 'Priya — Middle Earth',
    createdAt: '2024-02-18'
  }
];

const LESSONS = [
  {
    id: 'knife-basics',
    title: 'Dorm Knife Skills 101',
    focus: ['safety', 'knife grip', 'dice vs. slice'],
    rewardXp: 60,
    estimatedMinutes: 15,
    steps: [
      'Learn the claw grip and practice on a cucumber.',
      'Watch the 3-minute safety video linked in the lesson.',
      'Dice half an onion and upload a photo to your streak log.'
    ]
  },
  {
    id: 'heat-control',
    title: 'Mastering Heat & Seasoning',
    focus: ['stovetop', 'seasoning', 'budget swaps'],
    rewardXp: 75,
    estimatedMinutes: 18,
    steps: [
      'Practice sautéing frozen veggies without thawing first.',
      'Taste and adjust with salt, acid, and heat using pantry staples.',
      'Log your flavor adjustments inside ZotBites.'
    ]
  },
  {
    id: 'meal-prep-sprint',
    title: '30-Minute Meal Prep Sprint',
    focus: ['batching', 'storage', 'microwave tips'],
    rewardXp: 90,
    estimatedMinutes: 25,
    steps: [
      'Plan three meals that share ingredients to reduce cost.',
      'Cook at least two components simultaneously (e.g., oven + stove).',
      'Portion into reusable containers and record fridge labels.'
    ]
  }
];

const ACHIEVEMENTS = [
  {
    id: 'first-login',
    title: 'Welcome to ZotBites',
    description: 'Create your profile to unlock tracking tools.',
    check: (user) => Boolean(user)
  },
  {
    id: 'uci-pride',
    title: 'True Anteater',
    description: 'Register with a @uci.edu email address.',
    check: (user) => user?.isUCI
  },
  {
    id: 'first-recipe',
    title: 'First Dish Down',
    description: 'Cook your first ZotBites recipe.',
    check: (user) => (user?.completedRecipes?.length || 0) >= 1
  },
  {
    id: 'five-recipes',
    title: 'Meal Prep Champ',
    description: 'Cook five unique recipes.',
    check: (user) => (user?.completedRecipes?.length || 0) >= 5
  },
  {
    id: 'streak-3',
    title: 'Consistency Counts',
    description: 'Maintain a 3-day cooking streak.',
    check: (user) => (user?.streak || 0) >= 3
  },
  {
    id: 'community-share',
    title: 'Community Contributor',
    description: 'Share a recipe tip with other students.',
    check: (_user, posts) => posts.length > DEFAULT_POSTS.length
  }
];

function clone(value) {
  if (value === null || value === undefined) return value;
  return JSON.parse(JSON.stringify(value));
}

const state = {
  user: loadFromStorage(STORAGE_KEYS.USER, null),
  pantry: loadFromStorage(STORAGE_KEYS.PANTRY, []),
  posts: loadFromStorage(STORAGE_KEYS.POSTS, DEFAULT_POSTS)
};

function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return clone(fallback);
    return JSON.parse(raw);
  } catch (error) {
    console.warn(`Unable to parse ${key}`, error);
    return clone(fallback);
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

const dom = {
  heroStreak: document.getElementById('hero-streak'),
  heroRecipes: document.getElementById('hero-recipes'),
  heroLessons: document.getElementById('hero-lessons'),
  signupForm: document.getElementById('signup-form'),
  signupFeedback: document.getElementById('signup-feedback'),
  signout: document.getElementById('signout'),
  accountSummary: document.getElementById('account-summary'),
  accountStatus: document.getElementById('account-status'),
  accountMeta: document.querySelector('.account-meta'),
  accountName: document.getElementById('account-name'),
  accountEmail: document.getElementById('account-email'),
  accountType: document.getElementById('account-type'),
  uciOnlyToggle: document.getElementById('uci-only'),
  tabButtons: Array.from(document.querySelectorAll('.tab-button')),
  apiForm: document.getElementById('api-form'),
  apiResponse: document.getElementById('api-response'),
  offlineImage: document.getElementById('offline-image'),
  offlinePreview: document.getElementById('offline-preview'),
  offlineStatus: document.getElementById('offline-status'),
  offlineResults: document.getElementById('offline-results'),
  pantryForm: document.getElementById('pantry-form'),
  pantryInput: document.getElementById('pantry-input'),
  pantryList: document.getElementById('pantry-list'),
  clearPantry: document.getElementById('clear-pantry'),
  recipeSearch: document.getElementById('recipe-search'),
  mealFilter: document.getElementById('meal-filter'),
  recipeResults: document.getElementById('recipe-results'),
  xpBar: document.getElementById('xp-bar'),
  xpSummary: document.getElementById('xp-summary'),
  streakStatus: document.getElementById('streak-status'),
  achievementList: document.getElementById('achievement-list'),
  lessonList: document.getElementById('lesson-list'),
  favoriteList: document.getElementById('favorite-list'),
  communityForm: document.getElementById('community-form'),
  communityTitle: document.getElementById('community-title-input'),
  communityIngredients: document.getElementById('community-ingredients-input'),
  communityInstructions: document.getElementById('community-instructions-input'),
  communityFeedback: document.getElementById('community-feedback'),
  communityFeed: document.getElementById('community-feed')
};

let mobilenetModel;

function init() {
  updateHero();
  updateAccountSummary();
  renderPantry();
  renderRecipes();
  renderProgress();
  renderLessons();
  renderFavorites();
  renderCommunity();
  attachEventListeners();
}

function attachEventListeners() {
  dom.signupForm?.addEventListener('submit', handleSignup);
  dom.signout?.addEventListener('click', handleSignout);
  dom.tabButtons.forEach((button) => button.addEventListener('click', handleTabSwitch));
  dom.apiForm?.addEventListener('submit', handleApiSubmit);
  dom.offlineImage?.addEventListener('change', handleOfflineRecognition);
  dom.pantryForm?.addEventListener('submit', handlePantrySubmit);
  dom.clearPantry?.addEventListener('click', handlePantryClear);
  dom.recipeSearch?.addEventListener('input', renderRecipes);
  dom.mealFilter?.addEventListener('change', renderRecipes);
  dom.recipeResults?.addEventListener('click', handleRecipeActions);
  dom.lessonList?.addEventListener('click', handleLessonAction);
  dom.communityForm?.addEventListener('submit', handleCommunitySubmit);
}

function handleSignup(event) {
  event.preventDefault();
  const formData = new FormData(dom.signupForm);
  const name = formData.get('name').trim();
  const email = formData.get('email').trim().toLowerCase();
  const restrictUCI = dom.uciOnlyToggle.checked;

  dom.signupFeedback.classList.remove('success', 'error');

  if (!name || !email) {
    dom.signupFeedback.textContent = 'Please provide both name and email.';
    dom.signupFeedback.classList.add('error');
    return;
  }

  if (restrictUCI && !email.endsWith('@uci.edu')) {
    dom.signupFeedback.textContent = 'This cohort currently requires a valid @uci.edu email.';
    dom.signupFeedback.classList.add('error');
    return;
  }

  const user = {
    name,
    email,
    isUCI: email.endsWith('@uci.edu'),
    restrictUCI,
    xp: state.user?.xp || 0,
    streak: state.user?.streak || 0,
    lastCookedDate: state.user?.lastCookedDate || null,
    completedRecipes: state.user?.completedRecipes || [],
    completedLessons: state.user?.completedLessons || [],
    favorites: state.user?.favorites || []
  };

  state.user = user;
  saveToStorage(STORAGE_KEYS.USER, user);

  dom.signupFeedback.textContent = restrictUCI
    ? 'Success! Only Anteaters can join until you toggle the restriction off.'
    : 'Welcome! ZotBites will tag UCI community members automatically.';
  dom.signupFeedback.classList.add('success');

  dom.signupForm.reset();
  dom.uciOnlyToggle.checked = restrictUCI;

  updateAccountSummary();
  renderProgress();
  renderFavorites();
  renderRecipes();
  updateHero();
}

function handleSignout() {
  state.user = null;
  localStorage.removeItem(STORAGE_KEYS.USER);
  updateAccountSummary();
  renderProgress();
  renderFavorites();
  updateHero();
}

function updateAccountSummary() {
  if (!dom.accountSummary) return;
  if (!state.user) {
    dom.accountStatus.textContent = 'No account yet. Join to start earning achievements.';
    dom.accountMeta?.setAttribute('hidden', '');
    dom.signout?.setAttribute('hidden', '');
    return;
  }

  dom.accountStatus.textContent = 'You are ready to cook! Explore lessons and start a streak.';
  dom.accountMeta?.removeAttribute('hidden');
  dom.signout?.removeAttribute('hidden');

  dom.accountName.textContent = state.user.name;
  dom.accountEmail.textContent = state.user.email;
  dom.accountType.textContent = state.user.isUCI ? 'UCI verified' : 'Guest (auto-tag UCI friends)';
}

function handleTabSwitch(event) {
  const { tabButtons } = dom;
  const selected = event.currentTarget.dataset.tab;

  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === selected;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  document.querySelectorAll('.tab-panel').forEach((panel) => {
    if (panel.id === `tab-${selected}`) {
      panel.removeAttribute('hidden');
    } else {
      panel.setAttribute('hidden', '');
    }
  });
}

async function handleApiSubmit(event) {
  event.preventDefault();
  const endpoint = document.getElementById('api-endpoint').value.trim();
  const apiKey = document.getElementById('api-key').value.trim();
  const file = document.getElementById('api-image').files[0];

  if (!endpoint || !apiKey || !file) {
    dom.apiResponse.textContent = 'Please provide an endpoint, API key, and image.';
    return;
  }

  dom.apiResponse.textContent = 'Uploading photo and awaiting response...';

  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: apiKey
      },
      body: formData
    });

    const text = await response.text();
    dom.apiResponse.textContent = text;
  } catch (error) {
    dom.apiResponse.textContent = `Request failed: ${error.message}`;
  }
}

async function handleOfflineRecognition(event) {
  const file = event.target.files[0];
  if (!file) return;

  dom.offlineStatus.textContent = 'Loading MobileNet model…';

  try {
    if (!mobilenetModel) {
      mobilenetModel = await mobilenet.load({ version: 2, alpha: 1.0 });
    }

    dom.offlineStatus.textContent = 'Classifying image…';
    const dataUrl = await readFileAsDataURL(file);
    dom.offlinePreview.style.backgroundImage = `url(${dataUrl})`;
    dom.offlinePreview.hidden = false;

    const img = new Image();
    img.src = dataUrl;
    await img.decode();

    const predictions = await mobilenetModel.classify(img, 5);

    if (!predictions.length) {
      dom.offlineStatus.textContent = 'No predictions available. Try a clearer photo.';
      dom.offlineResults.innerHTML = '';
      return;
    }

    dom.offlineResults.innerHTML = predictions
      .map((prediction) => `<li><strong>${prediction.className}</strong> — ${(prediction.probability * 100).toFixed(1)}%</li>`)
      .join('');
    dom.offlineStatus.textContent = 'Finished! Compare with recipe suggestions below.';
  } catch (error) {
    dom.offlineStatus.textContent = 'Unable to classify this image.';
    dom.offlineResults.innerHTML = '';
    console.error(error);
  }
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

function handlePantrySubmit(event) {
  event.preventDefault();
  const ingredient = dom.pantryInput.value.trim().toLowerCase();
  if (!ingredient) return;
  if (!state.pantry.includes(ingredient)) {
    state.pantry.push(ingredient);
    saveToStorage(STORAGE_KEYS.PANTRY, state.pantry);
    renderPantry();
    renderRecipes();
  }
  dom.pantryInput.value = '';
}

function handlePantryClear() {
  state.pantry = [];
  saveToStorage(STORAGE_KEYS.PANTRY, state.pantry);
  renderPantry();
  renderRecipes();
}

function renderPantry() {
  if (!dom.pantryList) return;
  dom.pantryList.innerHTML = '';
  state.pantry.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'chip-remove';
    removeBtn.textContent = '×';
    removeBtn.addEventListener('click', () => removePantryItem(item));
    li.appendChild(removeBtn);
    dom.pantryList.appendChild(li);
  });
}

function removePantryItem(item) {
  state.pantry = state.pantry.filter((entry) => entry !== item);
  saveToStorage(STORAGE_KEYS.PANTRY, state.pantry);
  renderPantry();
  renderRecipes();
}

function renderRecipes() {
  if (!dom.recipeResults) return;
  const query = dom.recipeSearch.value.trim().toLowerCase();
  const mealFilter = dom.mealFilter.value;
  const pantrySet = new Set(state.pantry);

  const filtered = RECIPES.filter((recipe) => {
    const matchesQuery = !query ||
      recipe.name.toLowerCase().includes(query) ||
      recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(query));

    const matchesMeal = mealFilter === 'all' || recipe.tags.includes(mealFilter);

    const matchesPantry = pantrySet.size === 0
      ? true
      : recipe.pantryKeywords.some((keyword) => pantrySet.has(keyword));

    const respectsVegFilter = mealFilter === 'vegetarian'
      ? recipe.isVegetarian
      : mealFilter === 'vegan'
        ? recipe.tags.includes('vegan')
        : true;

    return matchesQuery && matchesMeal && matchesPantry && respectsVegFilter;
  });

  dom.recipeResults.innerHTML = '';

  if (!filtered.length) {
    const empty = document.createElement('p');
    empty.textContent = 'No matches yet. Try adding a few more pantry items or clearing filters.';
    dom.recipeResults.appendChild(empty);
    return;
  }

  filtered.forEach((recipe) => {
    const card = createRecipeCard(recipe, pantrySet);
    dom.recipeResults.appendChild(card);
  });
}

function createRecipeCard(recipe, pantrySet) {
  const card = document.createElement('article');
  card.className = 'recipe-card';
  card.dataset.recipeId = recipe.id;

  const matchCount = recipe.pantryKeywords.filter((keyword) => pantrySet.has(keyword)).length;
  const matchLabel = pantrySet.size ? `${matchCount}/${recipe.pantryKeywords.length} pantry items` : 'Great dorm staple';

  card.innerHTML = `
    <header>
      <h3>${recipe.name}</h3>
      <div class="recipe-meta">
        <span>⏱ ${recipe.cookTime} min</span>
        <span>💸 $${recipe.costPerServing.toFixed(2)} / serving</span>
        <span>⭐️ ${recipe.difficulty}</span>
        <span>${matchLabel}</span>
      </div>
    </header>
    <div class="recipe-meta">
      ${recipe.tags.map((tag) => `<span>#${tag}</span>`).join(' ')}
    </div>
    <details>
      <summary>See ingredients & steps</summary>
      <strong>Ingredients</strong>
      <ul>${recipe.ingredients.map((item) => `<li>${item}</li>`).join('')}</ul>
      <strong>Steps</strong>
      <ol>${recipe.steps.map((step) => `<li>${step}</li>`).join('')}</ol>
      <p><em>${recipe.nutritionTip}</em></p>
    </details>
    <div class="recipe-actions">
      <button type="button" class="button primary" data-action="complete" data-recipe="${recipe.id}">Mark cooked</button>
      <button type="button" class="button" data-action="favorite" data-recipe="${recipe.id}">
        ${state.user?.favorites?.includes(recipe.id) ? 'Remove favorite' : 'Save favorite'}
      </button>
    </div>
  `;

  return card;
}

function handleRecipeActions(event) {
  const action = event.target.dataset.action;
  if (!action) return;

  const recipeId = event.target.dataset.recipe;
  const recipe = RECIPES.find((item) => item.id === recipeId);
  if (!recipe) return;

  if (!state.user) {
    alert('Create an account to track your progress and favorites.');
    return;
  }

  if (action === 'favorite') {
    toggleFavorite(recipeId);
  } else if (action === 'complete') {
    completeRecipe(recipeId);
  }
}

function toggleFavorite(recipeId) {
  const favorites = new Set(state.user.favorites || []);
  if (favorites.has(recipeId)) {
    favorites.delete(recipeId);
  } else {
    favorites.add(recipeId);
  }
  state.user.favorites = Array.from(favorites);
  saveToStorage(STORAGE_KEYS.USER, state.user);
  renderFavorites();
  renderRecipes();
}

function renderFavorites() {
  if (!dom.favoriteList) return;
  dom.favoriteList.innerHTML = '';

  if (!state.user || !state.user.favorites?.length) {
    const empty = document.createElement('p');
    empty.textContent = 'Save recipes you love to build a custom dorm cookbook.';
    dom.favoriteList.appendChild(empty);
    return;
  }

  state.user.favorites.forEach((id) => {
    const recipe = RECIPES.find((item) => item.id === id);
    if (!recipe) return;
    const card = createRecipeCard(recipe, new Set(state.pantry));
    dom.favoriteList.appendChild(card);
  });
}

function completeRecipe(recipeId) {
  if (!state.user.completedRecipes) state.user.completedRecipes = [];
  if (!state.user.completedRecipes.includes(recipeId)) {
    state.user.completedRecipes.push(recipeId);
    state.user.xp = (state.user.xp || 0) + 50;
  }
  updateStreak();
  saveToStorage(STORAGE_KEYS.USER, state.user);
  renderProgress();
  renderRecipes();
  renderFavorites();
  updateHero();
}

function updateStreak() {
  const today = new Date();
  const todayKey = today.toISOString().split('T')[0];

  if (!state.user.lastCookedDate) {
    state.user.streak = 1;
  } else {
    const previous = new Date(state.user.lastCookedDate);
    const diff = Math.floor((today - previous) / (1000 * 60 * 60 * 24));
    if (diff === 0) {
      // already cooked today
      return;
    }
    if (diff === 1) {
      state.user.streak = (state.user.streak || 0) + 1;
    } else {
      state.user.streak = 1;
    }
  }

  state.user.lastCookedDate = todayKey;
}

function renderProgress() {
  if (!dom.xpBar) return;

  if (!state.user) {
    dom.xpBar.style.width = '0%';
    dom.xpSummary.textContent = 'Create an account to start collecting XP.';
    dom.streakStatus.textContent = 'Streak: 0 days';
    dom.achievementList.innerHTML = ACHIEVEMENTS.map((achievement) => `<li>${achievement.title} — ${achievement.description}</li>`).join('');
    return;
  }

  const levelThreshold = 500;
  const xp = state.user.xp || 0;
  const progress = Math.min(100, (xp % levelThreshold) / levelThreshold * 100);
  const level = Math.floor(xp / levelThreshold) + 1;

  dom.xpBar.style.width = `${progress}%`;
  dom.xpSummary.textContent = `Level ${level} • ${xp} XP earned. ${levelThreshold - (xp % levelThreshold)} XP to your next badge.`;
  dom.streakStatus.textContent = `Streak: ${state.user.streak || 0} day${(state.user.streak || 0) === 1 ? '' : 's'}`;

  const achievements = ACHIEVEMENTS.map((achievement) => {
    const unlocked = achievement.check(state.user, state.posts);
    return `<li>${unlocked ? '🏆' : '⬜️'} <strong>${achievement.title}</strong> — ${achievement.description}</li>`;
  }).join('');

  dom.achievementList.innerHTML = achievements;
}

function renderLessons() {
  if (!dom.lessonList) return;
  dom.lessonList.innerHTML = '';

  LESSONS.forEach((lesson) => {
    const card = document.createElement('article');
    card.className = 'lesson-card';
    card.dataset.lessonId = lesson.id;

    const completed = state.user?.completedLessons?.includes(lesson.id);

    card.innerHTML = `
      <h3>${lesson.title}</h3>
      <div class="lesson-card__tags">${lesson.focus.map((topic) => `<span>#${topic}</span>`).join('')}</div>
      <p>Reward: ${lesson.rewardXp} XP • ${lesson.estimatedMinutes} minute sprint</p>
      <ol>${lesson.steps.map((step) => `<li>${step}</li>`).join('')}</ol>
      <button type="button" class="button ${completed ? 'ghost' : 'primary'}" data-action="complete-lesson" data-lesson="${lesson.id}" ${completed ? 'disabled' : ''}>
        ${completed ? 'Completed' : 'Mark lesson complete'}
      </button>
    `;

    dom.lessonList.appendChild(card);
  });
}

function handleLessonAction(event) {
  const action = event.target.dataset.action;
  if (action !== 'complete-lesson') return;
  if (!state.user) {
    alert('Create an account to track lesson progress.');
    return;
  }

  const lessonId = event.target.dataset.lesson;
  if (!lessonId) return;
  if (!state.user.completedLessons) state.user.completedLessons = [];
  if (state.user.completedLessons.includes(lessonId)) return;

  const lesson = LESSONS.find((item) => item.id === lessonId);
  if (!lesson) return;

  state.user.completedLessons.push(lessonId);
  state.user.xp = (state.user.xp || 0) + lesson.rewardXp;
  saveToStorage(STORAGE_KEYS.USER, state.user);

  renderLessons();
  renderProgress();
  updateHero();
}

function handleCommunitySubmit(event) {
  event.preventDefault();
  dom.communityFeedback.classList.remove('error', 'success');
  if (!state.user) {
    dom.communityFeedback.textContent = 'Create a free account before posting to the community feed.';
    dom.communityFeedback.classList.add('error');
    return;
  }

  const title = dom.communityTitle.value.trim();
  const ingredients = dom.communityIngredients.value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  const instructions = dom.communityInstructions.value.trim();

  if (!title || !ingredients.length || !instructions) {
    dom.communityFeedback.textContent = 'Please add a title, at least one ingredient, and instructions.';
    dom.communityFeedback.classList.add('error');
    return;
  }

  const post = {
    title,
    ingredients,
    instructions,
    author: `${state.user.name} — ${state.user.isUCI ? 'UCI' : 'Guest Ally'}`,
    createdAt: new Date().toISOString().split('T')[0]
  };

  state.posts = [...state.posts, post];
  saveToStorage(STORAGE_KEYS.POSTS, state.posts);

  dom.communityFeedback.textContent = 'Recipe shared with the community!';
  dom.communityFeedback.classList.remove('error');
  dom.communityFeedback.classList.add('success');

  dom.communityForm.reset();

  renderCommunity();
  renderProgress();
}

function renderCommunity() {
  if (!dom.communityFeed) return;
  dom.communityFeed.innerHTML = '';

  state.posts.forEach((post) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${post.title}</strong><br>
      <span>${post.ingredients.join(', ')}</span><br>
      <span>${post.instructions}</span><br>
      <small>Shared by ${post.author} on ${formatDate(post.createdAt)}</small>
    `;
    dom.communityFeed.appendChild(li);
  });
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function updateHero() {
  const streak = state.user?.streak || 0;
  if (dom.heroStreak) {
    dom.heroStreak.textContent = streak;
  }
  if (dom.heroRecipes) {
    const cooked = state.user?.completedRecipes?.length || 0;
    dom.heroRecipes.textContent = cooked;
  }
  if (dom.heroLessons) {
    const lessons = state.user?.completedLessons?.length || 0;
    dom.heroLessons.textContent = lessons;
  }
}

window.addEventListener('load', init);
