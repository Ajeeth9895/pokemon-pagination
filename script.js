
//Dom
let details = document.querySelector(".container-lg");



//function fetch pokemon api using async and await
async function resData(api) {
  let res = await fetch(api, {
    method: "GET",
  });

  return res.json();
}

// calling function to get api data
resData("https://pokeapi.co/api/v2/pokemon?offset=0&limit=4").then((res) => {
  //to get  pokemon details
  details.innerHTML="";
  append_func(res);
})
.catch((rej)=>{
  console.log(rej);
})


//append pokemon data
var append_func = function(res){
  for (let i = 0; i < res.results.length; i++) {
    resData(res.results[i].url).then((url) => {
      let image = url.sprites.other.dream_world.front_default;
      let name = url.name;
      let weight = url.weight;
      let moves = url.moves[0].move.name;
      let abilities = url.abilities[0].ability.name;

      let content = `
        <div class="card" style="width: 15rem; height:25em;  border: 2px solid black; ">
        <img src="${image}" class="card-img-top my-1"  style="height:12em" alt="...">
        <div class="card-body" style="height:13em">
          <h5 class="card-title"><b>Name: </b>${name}</h5>
          <h6 class="card-title"><b>Weight: </b>${weight}</h6>
          <h6 class="card-title"><b>Move: </b>${moves}</h6>
          <h6 class="card-title"><b>Ability: </b>${abilities}</h6>
        </div>
      </div>
        `;

      //dom creation to append pokemon details
      
      let details1 = document.createElement("div");
      details1.setAttribute("class", "detail_div");
      details1.innerHTML = content;
      details.append(details1);
    });
  }
}


//pagination creation

var pagination_app = document.querySelector('#pagination');

let pagination_value = `
<nav aria-label="Page navigation example">
<ul class="pagination">
  <button type="button" class="btn btn-primary" onclick="first()">First</button>
  <li class="page-item"><a class="page-link" onclick="first()">1</a></li>
  <li class="page-item"><a class="page-link" onclick="second()">2</a></li>
  <li class="page-item"><a class="page-link" onclick="third()">3</a></li>
  <li class="page-item"><a class="page-link" onclick="four()">4</a></li>
  <li class="page-item"><a class="page-link" onclick="five()">5</a></li>
  <li class="page-item"><a class="page-link" onclick="six()">6</a></li>
  <li class="page-item"><a class="page-link" onclick="seven()">7</a></li>
  <li class="page-item"><a class="page-link" onclick="eight()">8</a></li>
  <li class="page-item"><a class="page-link" onclick="nine()">9</a></li>
  <li class="page-item"><a class="page-link" onclick="ten()">10</a></li>
  <button type="button" class="btn btn-primary" onclick="ten()">Last</button>
</ul>
</nav>
`
//appending pagination button 
pagination_app.innerHTML = pagination_value;





//pagination function for first button
var first = ()=>{
  resData("https://pokeapi.co/api/v2/pokemon?offset=0&limit=4").then((res) => {
  details.innerHTML="";
  append_func(res);
})
.catch((rej)=>{
  console.log(rej);
})
}


//pagination function for second button
var second = ()=>{
  resData("https://pokeapi.co/api/v2/pokemon?offset=5&limit=4").then((res) => {
  details.innerHTML="";
  append_func(res);
})
.catch((rej)=>{
  console.log(rej);
})
}


//pagination function for third button
var third = ()=>{
  resData("https://pokeapi.co/api/v2/pokemon?offset=9&limit=4").then((res) => {
  details.innerHTML="";
  append_func(res);
})
.catch((rej)=>{
  console.log(rej);
})
}


//pagination function for fourth button
var four = ()=>{
  resData("https://pokeapi.co/api/v2/pokemon?offset=13&limit=4").then((res) => {
  details.innerHTML="";
  append_func(res);
})
.catch((rej)=>{
  console.log(rej);
})
}

//pagination function for fifth button
var five = ()=>{
  resData("https://pokeapi.co/api/v2/pokemon?offset=17&limit=4").then((res) => {
  details.innerHTML="";
  append_func(res);
})
.catch((rej)=>{
  console.log(rej);
})
}


//pagination function for sixth button
var six = ()=>{
  resData("https://pokeapi.co/api/v2/pokemon?offset=21&limit=4").then((res) => {
  details.innerHTML="";
  append_func(res);
})
.catch((rej)=>{
  console.log(rej);
})
}

//pagination function for seven button
var seven = ()=>{
  resData("https://pokeapi.co/api/v2/pokemon?offset=25&limit=4").then((res) => {
  details.innerHTML="";
  append_func(res);
})
.catch((rej)=>{
  console.log(rej);
})
}

//pagination function for eighth button
var eight = ()=>{
  resData("https://pokeapi.co/api/v2/pokemon?offset=29&limit=4").then((res) => {
  details.innerHTML="";
  append_func(res);
})
.catch((rej)=>{
  console.log(rej);
})
}


//pagination function for nine button
var nine = ()=>{
  resData("https://pokeapi.co/api/v2/pokemon?offset=33&limit=4").then((res) => {
  details.innerHTML="";
  append_func(res);
})
.catch((rej)=>{
  console.log(rej);
})
}


//pagination function for ten button
var ten = ()=>{
  resData("https://pokeapi.co/api/v2/pokemon?offset=37&limit=4").then((res) => {
  details.innerHTML="";
  append_func(res);
})
.catch((rej)=>{
  console.log(rej);
})
}