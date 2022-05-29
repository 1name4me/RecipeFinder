const recipe = document.querySelectorAll('.recipes__card ');
// const selectedAll = document.querySelectorAll('.link')
const selectedAll = document.querySelectorAll('.selected')
const searchForm = document.querySelector('form')
const searchResultsContainer = document.querySelector('.recipes')
const optionsContainer = document.querySelectorAll('.options__container')
const cuisineType = document.querySelectorAll('[data-cuisineType]')
let searchValue = ''

const app_id = '1665264b'
// const app_key = 'dcf6fa5a47552c7c57d7dc313c415b9b'

const app_key = 'fc74d371c1msh5db720f0aa2290ep19f213jsnbaa616a6020e'




window.onload = function() {
    
}

//closes dropdown when user clicks outside of dropdown
document.addEventListener('click', e => {
    const dropdown = e.target.matches('.options__container')
    if (!dropdown && e.target.closest('.dropdown') != null) return

    let currentDropdown
    if (currentDropdown) {
        currentDropdown = e.target.closest('.options__container')
        currentDropdown.classList.toggle('active')
    } 

    document.querySelectorAll('.options__container.active').forEach(dropdown => {
        if(dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})


// Dropdown Interactivity
selectedAll.forEach((selected) => {
    const optionsContainer = selected.previousElementSibling;
    const optionLists = optionsContainer.querySelectorAll('.option');

    selected.addEventListener('click', () => {
        if (optionsContainer.classList.contains('active')) {
            optionsContainer.classList.remove('active');
        } else {

            let currentActive = document.querySelector('.options__container.active');

            if (currentActive) {
                currentActive.classList.remove('active');
            }
            optionsContainer.classList.add('active');
        }
    })

    optionLists.forEach( e => {
        e.addEventListener('click', () => {
            selected.innerHTML = e.querySelector('label').innerHTML;
            optionsContainer.classList.remove('active')
        })
    })
})


// optionsContainer.addEventListener('click', (e) => {
//     const options = document.querySelectorAll('.option')
//     options.forEach((e) => {
//         e.target.cuisineType.addEventListener('click' , () => {
//             alert('ajklhds')
//         })
//     })
// })

//dropdown functionality
 


searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    searchValue = e.target.querySelector('input').value
    fetchAPI()
})

async function fetchAPI() {
    // const baseURL = `https://api.edamam.com/api/recipes/v2/?app_id=${app_id}&app_key=${app_key}&type=public&q=${searchValue}`
    // const baseURL = `https://api.edamam.com/search?q=${searchValue}&app_id=${app_id}&app_key=${app_key}`
    // const response = await fetch(baseURL);
    // const data = await response.json();
    // generateHTML(data.hits);
    // console.log(data);

    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=100&q=${searchValue}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": `${app_key}`
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
    generateHTML(response.results)
})
.catch(err => {
	console.error(err);
});
}

function generateHTML(results) {
    let generatedHTML = '';
    results.map(result => {
        generatedHTML += 
        `
        <div class="recipes__card">
                <div>
                    <img src="${result.thumbnail_url}" class="image">
                </div>
                <div class="recipes__card-info">
                    <div class="title">${result.name}</div>
                    <div class="hline"></div>
                    <div class="total-time">total time: ${result.total_time_tier} min</div>
                    <div class="time-container">
                        <div class="detailed-time">
                            <div class="detailed-time__title">prep time:</div>
                            <div class="detailed-time__min">10 min</div>
                        </div>
                        <div class="detailed-time">
                            <div class="detailed-time__title">cooking time:</div>
                            <div class="detailed-time__min">10 min</div>
                        </div>
                        <div class="detailed-time">
                            <div class="detailed-time__title">cooling time:</div>
                            <div class="detailed-time__min">10 min</div>
                        </div>
                    </div>
                    <div class="hline"></div>
                    <div class="nutrition">
                        <div class="nutrition__info">
                            <div class="number">423</div>
                            <div class="info">kcal</div>
                        </div>
                        <div class="nutrition__info">
                            <div class="number">423</div>
                            <div class="info">kcal</div>
                        </div>
                        <div class="nutrition__info">
                            <div class="number">423</div>
                            <div class="info">kcal</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    searchResultsContainer.innerHTML = generatedHTML;
}



// const mealtype_options = [
//     all = document.querySelector('[data-all]'),
//     breakfast = document.querySelector('[data-breakfast]'),
//     lunch = document.querySelector('[data-lunch]'),
//     dinner = document.querySelector('[data-dinner]')
// ];






// const baseURL = `https://api.edamam.com/api/recipes/v2/?app_id=${app_id}&app_key=${app_key}&type=public&q=${searchValue}`

//multi select dropdown START




//multi select dropdown END



// document.addEventListener('click', e => {
//     const isDropdownButton = e.target.matches('[data-dropdown-button]')
//     if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

//     let currentDropdown
//     if (isDropdownButton) {
//         currentDropdown = e.target.closest('[data-dropdown]')
//         currentDropdown.classList.toggle('active')
//     }    

//     document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
//         if (dropdown === currentDropdown) return
//         dropdown.classList.remove('active')
//     })
// })

// selectedAll.forEach((selected) => {
//     const optionLists = document.querySelectorAll('.option')
//     // const optionsContainer = document.querySelector('.dropdown-menu')
//     optionLists.forEach(e => {
//         e.addEventListener('click', () => {
//             selected.innerHTML = e.querySelector('label').innerHTML;
//         })
//     })
// })

// lightslider start
// window.onload = function() {
//     $(document).ready(function() {
//         $('#autoWidth').lightSlider({
//             autoWidth:true,
//             loop:false,
//             onSliderLoad: function() {
//                 $('#autoWidth').removeClass('cS-hidden');
//             } 
//         });  
//       });
// }
//lightslider end