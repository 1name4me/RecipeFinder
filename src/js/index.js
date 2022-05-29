const browse_all = document.querySelector('.browse-all')
const mealtype = document.querySelector('.meal-type')
const baking = document.querySelector('.baking')
const ingredients = document.querySelector('.ingredients')

browse_all.addEventListener('click', () => {
    window.location.href = 'browse_all_recipes.html'
})

mealtype.addEventListener('click', () => {
    window.location.href = 'meal_type.html'
})

baking.addEventListener('click', () => {
    window.location.href = 'baking.html'
})

ingredients.addEventListener('click', () => {
    window.location.href = '#'
})