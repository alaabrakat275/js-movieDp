let userName=document.getElementById("name");
let userEmail=document.getElementById("email");
let userPhone=document.getElementById("phone");
let userAge=document.getElementById("age");
let userPass=document.getElementById("password");
let userRePass=document.getElementById("rePassword");
let submitBtn=document.getElementById("submitBtn")
let searchBar=document.getElementById("search");
let apiSearch=document.getElementById("apiSearch");
let response;


// var httpRequest=new XMLHttpRequest();
// httpRequest.open("GET","https://api.themoviedb.org/3/trending/movie/week?api_key=955f0c05b120ec6e64af5c7bad730e85");
// httpRequest.send();
// var data=[];
// httpRequest.addEventListener('readystatechange',function(){
//     if(httpRequest.readyState==4)
//     {
//         data= JSON.parse(httpRequest.response).results;
       
//         console.log(data);
//         displayData();
//     }
// })


//Get Data from API:
 var links=document.querySelectorAll('.nav-link');
for(var i=0;i<links.length;i++)
{
    links[i].addEventListener('click',function(e)
    {
    let currentLink= e.target.text

     getApiData(currentLink);
    })
}
async function getApiData(link) {
    apiResponse = await fetch(`https://api.themoviedb.org/3/movie/${link}?api_key=955f0c05b120ec6e64af5c7bad730e85&language=en-US&page=1`);
    responseData = await apiResponse.json();
    response=await responseData.results
    
    displayData(response);
};
getApiData('now_playing');

//Display movies:
function displayData(list){
    var cols=``;
    for(var i=0;i<list.length ;i++)
    {
        cols+=`
        <div class="col-md-6 col-lg-4">
        <div class="img-fluid">
           <img src="https://image.tmdb.org/t/p/w500${list[i].poster_path}" class="w-100 "/>
           
           <div class="item-caption p-5">
           <h4>${list[i].original_title}</h4>
           <p >${list[i].overview}</p>
           <h5>rate: ${list[i].vote_average}</h5>
           <h5> ${list[i].release_date}</h5>
           </div>
        </div>
        
    </div>
        `
    }
    document.getElementById("rowData").innerHTML= cols;
}
//End Of Display movies:


// search in   term
function search(term){
    var cols=``;
    for(var i=0;i<response.length ;i++)
    {
        if(response[i].original_title.toLowerCase().includes(term.toLowerCase()))
    {
        cols+=`
        <div class="col-md-6 col-lg-4">
        <div class="img-fluid">
           <img src="https://image.tmdb.org/t/p/w500${response[i].poster_path}" class="w-100 "/>
           
           <div class="item-caption p-5">
           <h4>${response[i].original_title}</h4>
           <p >${response[i].overview}</p>
           <h5>rate: ${response[i].vote_average}</h5>
           <h5> ${response[i].release_date}</h5>
           </div>
        </div>
        
    </div>
        `
    }
    }
    document.getElementById("rowData").innerHTML= cols;
}
// search in Api
async function SearchByMovie() {
    
    movie= await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=955f0c05b120ec6e64af5c7bad730e85&query=${apiSearch.value}`);
    response = await movie.json();
    finalResult=await response.results;
 
    displayData(finalResult);
 


    

};
searchBar.addEventListener('input',function(){
    search(this.value);
})
apiSearch.addEventListener('input',async function(){
    await SearchByMovie();
})
// start of Validate
userName.onkeyup=function(){
 let nameRejex=/^[A-Z][a-z]{2,10}$/;
  
  if(nameRejex.test(userName.value)==true)
  {
submitBtn.removeAttribute("disabled");
$("#namealert").css("display","none");
userName.classList.add("is-valid");
userName.classList.remove("is-invalid");
  }
  else
  {
    submitBtn.disabled="true"
    $("#namealert").css("display","block");
    userName.classList.add("is-invalid")
  }
}
userEmail.onkeyup=function(){
    let emailRejex=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
     
     if(emailRejex.test(userEmail.value)==true)
     {
   submitBtn.removeAttribute("disabled");
   $("#emailalert").css("display","none");
   userEmail.classList.add("is-valid");
   userEmail.classList.remove("is-invalid");
     }
     else
     {
       submitBtn.disabled="true"
       $("#emailalert").css("display","block");
       userEmail.classList.add("is-invalid")
     }
}

userPhone.onkeyup=function(){
    let phoneRejex=/^(002){0,1}[0125][0-9]{10}$/;
     
     if(phoneRejex.test(userPhone.value)==true)
     {
   submitBtn.removeAttribute("disabled");
   $("#phonealert").css("display","none");
   userPhone.classList.add("is-valid");
   userPhone.classList.remove("is-invalid");
     }
     else
     {
       submitBtn.disabled="true"
       $("#phonealert").css("display","block");
       userPhone.classList.add("is-invalid")
     }
}
userAge.onkeyup=function(){
    let ageRejex=/([1-7][0-9]|80)$/;
     
     if(ageRejex.test(userAge.value)==true)
     {
   submitBtn.removeAttribute("disabled");
   $("#agealert").css("display","none");
   userAge.classList.add("is-valid");
   userAge.classList.remove("is-invalid");
     }
     else
     {
       submitBtn.disabled="true"
       $("#agealert").css("display","block");
       userAge.classList.add("is-invalid")
     }
}

userPass.onkeyup=function(){
    let passRejex=/^[0-9]{8,}$/;
     
     if(passRejex.test(userPass.value)==true)
     {
   submitBtn.removeAttribute("disabled");
   $("#passwordalert").css("display","none");
   userPass.classList.add("is-valid");
   userPass.classList.remove("is-invalid");
     }
     else
     {
       submitBtn.disabled="true"
       $("#passwordalert").css("display","block");
       userPass.classList.add("is-invalid")
     }
}
userRePass.onkeyup=function(){
    let REPassRejex=/^[0-9]{8,}$/;
     
    if(userRePass.value === userPass.value)
     {
   submitBtn.removeAttribute("disabled");
   $("#repasswordalert").css("display","none");
   userRePass.classList.add("is-valid");
   userRePass.classList.remove("is-invalid");
     }
    else
     {
       submitBtn.disabled="true"
       $("#repasswordalert").css("display","block");
       userRePass.classList.add("is-invalid")
     }
}
// end of validate

// open side nav
$(".sidebarBtn").click(function(){
    $(".sidebar").toggleClass('active');
    $(".sidebarBtn").toggleClass('toggle');
     $(".item1").animate({opicity:'1',paddingBottom:'25px'},1000);
     $(".item2").animate({opicity:'1',paddingBottom:'25px'},1100);
     $(".item3").animate({opicity:'1',paddingBottom:'25px'},1200);
     $(".item4").animate({opicity:'1',paddingBottom:'25px'},1300);
     $(".item5").animate({opicity:'1',paddingBottom:'25px'},1400);
     $(".item6").animate({opicity:'1',paddingBottom:'25px'},1500);
})


$(".sidebarBtn span").click(function(){
    
    $(".sidebarBtn span").toggleClass('toggle');
    $(".item1").animate({opicity:'0',paddingTop:'0px'},1000);
    $(".item2").animate({opicity:'0',paddingTop:'0px'},1100);
    $(".item3").animate({opicity:'0',paddingTop:'0px'},1200);
    $(".item4").animate({opicity:'0',paddingTop:'0px'},1300);
    $(".item5").animate({opicity:'0',paddingTop:'0px'},1400);
    $(".item6").animate({opicity:'0',paddingTop:'0px'},1500);
})



