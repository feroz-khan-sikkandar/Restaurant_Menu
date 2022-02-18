const http = new EasyHttp();


 let jsondata;

window.addEventListener("DOMContentLoaded", function (e) {
  console.log("DOMContent loaded");
  
  // Get Menus
  http
    .get("menu.json")
    .then(function (data) {
      loadMenu(data);
      jsondata = data;
    })
    .catch(function (err) {
      console.error(err);
    });


});

function loadMenu(data) {
 
      var menuItems = '';
      data.forEach(function (data) {
        menuItems += `
        <div class="menu-item">
        <img src="${data.img}" alt="menu image">
        <div class="item-content">
          <ul>
            <li class="item-name"> <h3> ${data.title} </h3> </li>
            <li class="item-price"> <i class="fa-solid fa-indian-rupee-sign"></i> ${data.price} </li>
          </ul>
          <p class="item-description">
            ${data.desc}
          </p>      
        </div>
      </div>   
        `
        document.querySelector("#menu-content").innerHTML = menuItems;
      
      });
    
}


// Filter Menu by Meal Time
var btns = document.querySelectorAll('button');

btns.forEach(function(btn) {

  btn.addEventListener('click', function(e){
    const className = e.currentTarget.classList.value;
    console.log(className);
   
      console.log("jsondata", jsondata);
      var menuByTime = jsondata.filter(function(item){
        
          return item.mealTime == className;
        
        console.log("menuByTime", menuByTime);
      });

      if(className == "all") {
        loadMenu(jsondata);
      } else {
        console.log("menuByTime", menuByTime);
        loadMenu(menuByTime);
      }
  
  })

})
