 function getNews(){
     fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=jXoGSM2YMIN1HaHMGwKXEnvACR5BUAFF')
    .then(res => res.json())
    .then(res => {
        
        for(var i =0; i< res.results.length; i++){
    console.log(res.results[i])
    const output= document.getElementById('output');
try{
output.innerHTML+=`


<div class="card" style="width: 18rem; ">
  <img src="${res.results[i].multimedia[0].url}" class="card-img-top" alt="${res.results[i].multimedia[0].url}" title="${res.results[i].multimedia[0].url}"}>
  <div class="card-body">
    <h3 class="card-title">${res.results[i].title}</h3>
    <p class="card-text">${res.results[i].abstract}</p>
   
  </div>
</div>


`


}
catch(err){
    console.log(err)

}


        }
        
    })


}
getNews()