let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

fetch('http://localhost:3000/toys')
.then(res=>res.json())  
.then(toyData=>
  {
//toyData is coming from the JSON file and renderToyCard is so we can make the toy card
    renderToyCards(toyData);

    //console.log(toyData)
  })
  function renderToyCards(toyData) {
    toyData.forEach(toy => {
      const h2 = document.createElement("h2");
      h2.textContent = toy.name
      const img = document.createElement("img");
      img.src = toy.image;
      img.classList.add("toy-avatar");
      const p = document.createElement("p");
      p.textContent = toy.likes
      const button = document.createElement("button");
      button.setAttribute('id','toy_id');
      button.textContent = "Like ❤️";
      const div = document.createElement("div");
      div.classList.add("card");

      div.append(h2, img, p, button);
      document.querySelector("#toy-collection").append(div);
      

// //* <div class="card">
//   <h2>Woody</h2>
//   <img src="[toy_image_url]" class="toy-avatar" />
//   <p>4 Likes</p>
//   <button class="like-btn" id="[toy_id]">Like ❤️</button>
// </div> *//
 })}

//////////////////////////////////////
// Add event listener for the 'submit'
//////////////////////////////////////
let form=document.querySelector('.add-toy-form') 
console.log(form);
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  console.log(event.target);
  addNewToy(event);
  
});

function addNewToy(event) { console.log(event.target);
  event.preventDefault();
  let formData = 
  {
  name: event.target[0].value, 
   image: event.target[1].value, 
   likes:0
    
  }
    console.log(event.target[0].value)


    return fetch('http://localhost:3000/toys',
  {
    method:"POST",
    headers:
    {
      'Content-Type':'application/json',
      'Accepts': 'application/json'
    },
    body:JSON.stringify(formData)
  })



//   return fetch('http://localhost:3000/toys', {
//     method: 'POST',
//     headers: 
//     {
//       'Content-Type': 'application/json',
//       'Accepts': 'application/json'
//     },
//     body: JSON.stringify(formData)
//   }) 
  

 }
