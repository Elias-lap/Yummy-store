 let rowData =document.getElementById('rowData')
 let InputsSearch =document.getElementById('InputsSearch')
 closeNav()
function openNav(){
  $(".side-nav-menu").animate({"left": '0px'} ,500 )
  $(".icon-bars").addClass('fa-xmark')
  $(".icon-bars").removeClass('fa-bars')
  for(i= 0 ; i<5 ;i++){
    $(".links li").eq(i).animate({top :0} ,(i+5)*100)
  }
}
function closeNav(){
  let leftSide =$(".left-side").outerWidth()
  $(".side-nav-menu").animate({"left":-leftSide} ,500 )
  $(".icon-bars").removeClass('fa-xmark')
  $(".icon-bars").addClass('fa-bars')
  $(".links li").animate({top :300} ,500)
}
// $(".side-nav-menu").css("left" , -leftSide )
$(".icon-bars").click(function () { 
  if ( $(".side-nav-menu").css("left")== '0px'){
    closeNav()
  }
  else{
    openNav()
  }
});


$(document).ready(()=>{
  searchMeals("").then(()=>{
    $('.loading-screen').fadeOut(500)
    $('.inner-loading-screen').fadeOut(500)
  })
})





 searchMeals("")
 
 function displaysearchMeals(arr){
  let cartona =''
  for (let i=0 ; i<arr.length ; i++){
    cartona+=`
    <div class="col-md-3 py-3">
    <div onclick= "getDitealsMeal('${arr[i].idMeal}')"  class="meal position-relative overflow-hidden ">
        <img class="w-100 " src="${arr[i].strMealThumb}"alt="">
        <div class="layer-meal  position-absolute d-flex align-items-center">
            <h3 class=" text-dark">${arr[i].strMeal}</h3>
        </div>
    </div>
</div>
    
    `
  }
   rowData.innerHTML=cartona
 }
 async function GetCategories(){
  $(".inner-loading-screen").fadeIn(300)
  let response= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  let data = await response.json()
  console.log(data.categories)
  displayGetCategories(data.categories)
  InputsSearch.innerHTML=''
  $('.inner-loading-screen').fadeOut(500)
 }
 
function displayGetCategories(arr){
  let cartona =''
  for (let i=0 ; i<arr.length ; i++){
    cartona+=`
    <div class="col-md-3 py-3">
    <div  onclick="getCategoriesMeal('${arr[i].strCategory}')"class="meal position-relative overflow-hidden cursor-pointer">
        <img class="w-100 " src="${arr[i].strCategoryThumb}"alt="">
        <div class="layer-meal  position-absolute text-center ">
            <h3 class=" text-dark">${arr[i].strCategory}</h3>
            <p class=" text-dark">${arr[i].strCategoryDescription.split(' ').slice(0,10).join(' ')}</p>
           
        </div>
    </div>
</div>
  `
  }
  rowData.innerHTML=cartona

}
async function getAreaMeal(){
  $(".inner-loading-screen").fadeIn(300)
  let response =await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
  let data =await response.json()
  console.log(data.meals)
  displaygetAreaMeal (data.meals)
  $('.inner-loading-screen').fadeOut(500)
  InputsSearch.innerHTML=''

}
function displaygetAreaMeal (arr){
  let cartona =''
  for (let i=0 ; i<arr.length ; i++){
    cartona+=`
    <div onclick=(geAllareaMeal('${arr[i].strArea}')) class="col-md-3 py-3 text-center cursor-pointer">
    <i class="fa-solid fa-circle-info fa-8x text-white"></i>
    <h3 class=" text-white">${arr[i].strArea}</h3>
</div>
  `
  }
  rowData.innerHTML=cartona
}
async function getIngredients(){
  $(".inner-loading-screen").fadeIn(300)
  let response =await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  let data =await response.json()
  console.log(data.meals)
  displayIngredients (data.meals.slice(0,20))
  $('.inner-loading-screen').fadeOut(500)
  InputsSearch.innerHTML=''

}
function displayIngredients (arr){
  let cartona =''
  for (let i=0 ; i<arr.length ; i++){
    cartona+=`
    <div onclick="getAllIngredients('${arr[i].strIngredient}')" class="col-md-3 py-3 text-center  cursor-pointer">
    <i class="fa-solid fa-drumstick-bite fa-8x text-white"></i>
    <h3 class=" text-white">${arr[i].strIngredient}</h3>
    <p class=" text-white">${arr[i].strDescription.split(' ').slice(0,10).join(' ')}</p>
</div>
  `
  }
  rowData.innerHTML=cartona
}
async function getCategoriesMeal(categores){
  $(".inner-loading-screen").fadeIn(300)
  let response =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categores}`)
  let data = await response.json()
  console.log(data.meals)
  displayGetCategoriesMeal (data.meals)
  $('.inner-loading-screen').fadeOut(500)
}
function displayGetCategoriesMeal (arr){
  let cartona =''
  for (let i=0 ; i<arr.length ; i++){
    cartona+=`
    <div class="col-md-3 py-3">
    <div onclick= "getDitealsMeal('${arr[i].idMeal}')"  class="meal position-relative overflow-hidden cursor-pointer">
        <img class="w-100 " src="${arr[i].strMealThumb}"alt="">
        <div class="layer-meal  position-absolute text-center ">
            <h3 class=" text-dark">${arr[i].strMeal}</h3>
           
           
        </div>
    </div>
</div>
  `
  }
  rowData.innerHTML=cartona
}
async function geAllareaMeal(area){
  $(".inner-loading-screen").fadeIn(300)
  let response =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
  let data = await response.json()
  console.log(data.meals)
  displayAllireaMeal(data.meals) 
  $('.inner-loading-screen').fadeOut(500)
}
 function  displayAllireaMeal(arr) {
  let cartona =''
  for (let i=0 ; i<arr.length ; i++){
    cartona+=`
    <div class="col-md-3 py-3">
    <div onclick= "getDitealsMeal('${arr[i].idMeal}')"   class="meal position-relative overflow-hidden cursor-pointer">
        <img class="w-100 " src="${arr[i].strMealThumb}"alt="">
        <div class="layer-meal  position-absolute text-center ">
            <h3 class=" text-dark">${arr[i].strMeal}</h3>
        </div>
    </div>
</div>
  `
  }
  rowData.innerHTML=cartona
 }
 async function getAllIngredients(Ingredients){
  $(".inner-loading-screen").fadeIn(300)
  let response =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredients}`)
  let data = await response.json()
  console.log(data.meals)
  displaygeAllIngredients(data.meals)
  $('.inner-loading-screen').fadeOut(500)
  
}
function  displaygeAllIngredients(arr) {
  let cartona =''
  for (let i=0 ; i<arr.length ; i++){
    cartona+=`
    <div class="col-md-3 py-3">
    <div onclick= "getDitealsMeal('${arr[i].idMeal}')"  class="meal position-relative overflow-hidden cursor-pointer">
        <img class="w-100 " src="${arr[i].strMealThumb}"alt="">
        <div class="layer-meal  position-absolute text-center ">
            <h3 class=" text-dark">${arr[i].strMeal}</h3>
        </div>
    </div>
</div>
  `
  }
  rowData.innerHTML=cartona
 }
async function getDitealsMeal(idmeal){
  $(".inner-loading-screen").fadeIn(300)
  let response =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`)
  let data= await response.json()
  console.log(data.meals[0])
   displayDiteals (data.meals[0])
   InputsSearch.innerHTML=''
   $('.inner-loading-screen').fadeOut(500)
}

function displayDiteals (meal){

  let strIngredient = ``
  for ( i = 0 ; i <= 20 ;i++ ){
    if (meal[`strIngredient${i}`]){
       strIngredient +=`<li class=" alert alert-light mx-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`

    }
    
  }
  let strTags = meal.strTags?.split(',')
  if(!strTags )strTags=[]

  let tagsstr =''
 for( i=0 ; i < strTags.length ; i++){
 tagsstr+=` <li class=" alert alert-light mx-1">${strTags[i]}</li>`
 }
  
  let cartona=''
  cartona+=`
  
  <div class="col-md-4">
      <img class="w-100" src="${meal.strMealThumb}" alt="meal">
      <h2 class="text-white">${meal.strMeal}</h2>
  </div>
  <div class="col-md-8">
      <h2 class="text-white">Instructions</h2>
      <p class="text-white">${meal.strInstructions}</p>
          <h2 class="text-white">Area :<span>${meal.strArea}</span></h2>
          <h2 class="text-white">Category  :<span>${meal.strCategory}</span></h2>
          <h2 class="text-white">Recipes  : </h2>
              <ul  class="list-unstyled text-white d-flex flex-wrap m-2 p-2">
              ${strIngredient}
              </ul>
          <h2 class="text-white">Tags :</h2>
              <ul  class="list-unstyled text-white d-flex flex-wrap m-2 p-2">
                      ${tagsstr}
              </ul>

            <a href="${meal.strYoutube}" class="btn btn-success">source</a>
            <a class="btn btn-danger" href="${meal.strSource}">youtupe</a>    
  </div>
  `

  rowData.innerHTML=cartona
}


function DisplayInputsSearch (){
  InputsSearch.innerHTML=`
  <div class="col-md-6 mt-4">
  <input onkeyup="searchMeals(this.value)"  type="text" class=" form-control bg-transparent border-top-0 text-white"
      placeholder="Search By Name">
</div>
<div class="col-md-6 mt-4">
  <input onkeyup="searchMealsFirstlitter(this.value)" maxlength="1" type="text  " class=" form-control bg-transparent border-top-0 text-white"
      placeholder="Search By first Litter">
</div>
  
  `

 rowData.innerHTML=''
}

async  function searchMeals(term){
  $(".inner-loading-screen").fadeIn(300)
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
  let data = await response.json()
  displaysearchMeals(data.meals)
  data.meals ? displaysearchMeals(data.meals) :displaysearchMeals([])
  $('.inner-loading-screen').fadeOut(500)
}
async  function searchMealsFirstlitter(term){
  $(".inner-loading-screen").fadeIn(300)
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
  let data = await response.json()
  displaysearchMeals(data.meals)
  data.meals ? displaysearchMeals(data.meals) :displaysearchMeals([])
  $('.inner-loading-screen').fadeOut(500)
}
searchMealsFirstlitter()

function showContacts(){
  rowData.innerHTML=
  `
  <div class="min-vh-100 d-flex justify-content-center align-items-center" >
<div class="container w-75  text-center ">
    <div class="row  ">
        <div class="col-md-6 ">
            <input id="NameInput" onclick="allInputsValidation()"  type="text " placeholder="Enter your Name" class=" form-control mb-3 ">
            <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
            Special characters and numbers not allowed
        </div>
        </div>
        <div class="col-md-6">
            <input id="EmailInput" onclick="allInputsValidation()"  type="text " placeholder="Enter your email" class=" form-control ">
            <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
            Email not valid *exemple@yyy.zzz
        </div>
        </div>
        <div class="col-md-6">
            <input id="phoneInput" onclick="allInputsValidation()"  type="tel " placeholder="Enter your phone" class=" form-control mb-3 ">
            <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
            Enter valid Phone Number
        </div>
        </div>
        <div class="col-md-6">
            <input id="ageInput" onclick="allInputsValidation()"   type="number " placeholder="Enter your age" class=" form-control ">
            <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
            Enter valid age
        </div>
        </div>
        <div class="col-md-6">
            <input id="passwordInput" onclick="allInputsValidation()"  type="password" placeholder="Enter your password" class=" form-control mb-3">
            <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
            Enter valid password *Minimum eight characters, at least one letter and one number:*
        </div>
        </div>
        <div class="col-md-6">
            <input id="RepasswordInput" onclick="allInputsValidation()"  type="password" placeholder="Enter your RePassword" class=" form-control ">
            <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
            Enter valid repassword 
        </div>
        </div>
        
    </div>
    <button id="disabled" disabled class="btn btn-danger">Sumbit</button>

</div>

</div> 
  
  
  
  `
  document.getElementById("NameInput").addEventListener("focus", () => {
    nameInputTouched = true
})

document.getElementById("EmailInput").addEventListener("focus", () => {
    emailInputTouched = true
})

document.getElementById("phoneInput").addEventListener("focus", () => {
    phoneInputTouched = true
})

document.getElementById("ageInput").addEventListener("focus", () => {
  ageInputTouched = true
})

document.getElementById("passwordInput").addEventListener("focus", () => {
    passwordInputTouched = true
})

document.getElementById("RepasswordInput").addEventListener("focus", () => {
    repasswordInputTouched = true
})





}
let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;





function allInputsValidation(){

  if (nameInputTouched) {
    if (nameValidation()) {
        document.getElementById("nameAlert").classList.replace("d-block", "d-none")

    } else {
        document.getElementById("nameAlert").classList.replace("d-none", "d-block")

    }
}
if (emailInputTouched) {

    if (emailValidation()) {
        document.getElementById("emailAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("emailAlert").classList.replace("d-none", "d-block")

    }
}

if (phoneInputTouched) {
    if (phoneValidation()) {
        document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

    }
}

if (ageInputTouched) {
    if ( ageValidation()) {
        document.getElementById("ageAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("ageAlert").classList.replace("d-none", "d-block")

    }
}

if (passwordInputTouched) {
    if (passwordValidation()) {
        document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

    }
}
if (repasswordInputTouched) {
    if ( repasswordValidation()) {
        document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

    }
}

  if (nameValidation() &&
  emailValidation()&&
  phoneValidation() &&
  ageValidation()&&
  passwordValidation()&&
  repasswordValidation()
  
  )
  
  { 
     document.getElementById('disabled').removeAttribute('disabled')
     console.log('yessss')
  

  }else{
        document.getElementById('disabled').setAttribute('disabled' , true)}
        





}
function nameValidation() {
  return (/^[a-zA-Z ]+$/.test(document.getElementById("NameInput").value))
  
}

function emailValidation() {
  return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("EmailInput").value))
}

function phoneValidation() {
  return (/^(\+48|48)?\d{9}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
  return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
  return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
  return document.getElementById("RepasswordInput").value == document.getElementById("passwordInput").value
}


