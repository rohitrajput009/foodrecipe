let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{

//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');

// }
window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}


function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();




// fetch api , code.






const App_id = 'f6615977';
const app_key = '17ff7cb95f877fe1baba7205a8072971';



let searchbtn = document.getElementById('searchinput');

let data_container = document.getElementById('box-container');

let searchQuery = "";

function btnfunction() {


    searchQuery = document.getElementById('searchinput').value;

    console.log(searchQuery);



    fetchAPI();
}

async function fetchAPI() {

    const base_url = `https://api.edamam.com/search?q=${searchQuery}&app_id=${App_id}&app_key=${app_key}&to=20`;

    const response = await fetch(base_url);


    const data = await response.json();

    console.log(data);

     searchButtonLoader();
    
     getData();
    generateResults(data.hits);
    
    



}


function generateResults(results) {

    let generateHTML = '';

    results.map(result => {



        generateHTML +=


        `

        <div class="box">
        <span class="price" id="calorie"><strong> Calorie </strong>: ${result.recipe.calories.toFixed(2)} </span>
        <img src="${result.recipe.image}" alt="">
        <h3 id="recipelabel" style="background-color:white"><strong>${result.recipe.label}</strong></h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>

        <h2><strong>Diet Label :</strong> ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : 'No Data Found'}</h2>

        <div class="healthlabel">

            <h2><strong>Ingredients :</strong> ${result.recipe.healthLabels}</h2>
        </div>
        <a href="${result.recipe.url}" class="btn" target = "_blank">Checkout The Recipe</a>
    </div>


        `


    })

    data_container.innerHTML = generateHTML;
}



function searchButtonLoader(){

  let btnSearch = document.getElementById('search');

  let searchhtml ='';

  searchhtml += 
  `
  <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
  
  `

  btnSearch.innerHTML = searchhtml;

  setTimeout(() => {
    
    btnSearch.innerHTML = `Search`;
  }, 2000);
  

}


function getData() {

    let dataisready = document.getElementById('readycontent');

    let emphtml = "";

    emphtml +=
        `
        <h1 class="heading"> Your <span>Response Is</span> Ready ! </h1>
    `;

    dataisready.innerHTML = emphtml;

    setTimeout(() => {

        dataisready.innerHTML ="";
        
    }, 4000);

}
















        //previous , code.








            //     //current code;



       




            
        // `
        // <div class="card mx-2 my-3" style="width: 20rem;">

        //     <img src="${result.recipe.image}" class="card-img-top" alt="...">

        //             <div class="card-body">
        //                 <h5 class="card-title">${result.recipe.label}</h5>
        //                 <p 

        //                 <p class="calorie"><strong>Calorie :</strong> ${result.recipe.calories.toFixed(2)}</p>

        //                 <p class="calorie"><strong>Diet Label :</strong> ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : 'No Data Found'}</p>

        //                 <p class="calorie"><strong>Health Label :</strong> ${result.recipe.healthLabels}</p>

        //                 <a href="${result.recipe.url}" target="_b;lank"class="btn btn-info">View Recipe</a>

        //             </div>
        // </div>
        // `
