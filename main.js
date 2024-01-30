let filterToggle = true;

//Create the Array and name it//
const students = [

 //add 28 objects 

{
    id: 1,
    name: "Jim",
    type: "",
    age: "",
    power: "",
    house: "Gryffindor",
    imageUrl: "https://www.gameinformer.com/sites/default/files/styles/full/public/2021/12/17/aa464761/bully-header-image.jpg"
   
},

{
    id: 2,
    name: "Cher",
    type: "",
    age: "",
    power: "",
    house: "Hufflepuff",
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7727cf71-88d3-47e7-aac7-c10a64cbc5d3/dfy4x0l-b0a5a4f5-16e9-4fb9-bb05-355e72e0119b.png/v1/fill/w_1280,h_854,q_80,strp/cher_horowitz_by_darksealstudios_dfy4x0l-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvNzcyN2NmNzEtODhkMy00N2U3LWFhYzctYzEwYTY0Y2JjNWQzXC9kZnk0eDBsLWIwYTVhNGY1LTE2ZTktNGZiOS1iYjA1LTM1NWU3MmUwMTE5Yi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Y8k-6KlVHR-a9z7KbkZS7DMFjFNlUwjchEmw3fNRRvU"

},

{
    id: 3,
    name: "Carlton",
    type: "",
    age: "",
    power: "",
    house: "Ravenclaw",
    imageUrl: "https://everythingwasbetter.com/wp-content/uploads/2023/03/fresh-prince-of-bel-air-outfits-prep-style-carlton-banks.jpg"
   
},

{
    id: 4,
    name: "Abigail",
    type: "",
    age: "",
    power: "",
    house: "Slytherin",
    imageUrl: "https://www.myfilmviews.com/wp-content/uploads/2013/09/thebighit2.png.png"
   
},


];
//render all the info based on the id of each product card//
const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };
  
  //get the cards on the DOM//
  const cardsOnDom = (array) => {
    let domString = "";

 //add the for of loop//
 for (const student of array) {
  domString += `<div class="card" style="width: 18rem;">
  <img src=${student.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
  <p class="card-text">Name: ${student.name}</p>
  <p class="card-text">Type: ${student.type}</p>
  <p class="card-text">Age: ${student.age}</p>
  <p class="card-text">Power: ${student.power}</p>
  <p class="card-text">House: ${student.house}</p>
  <button type="button" class="btn btn-danger" id="delete--${student.id}">Expel</button>
  </div>
</div>`;
}
  
//render to Dom for the app
    renderToDom("#app", domString);
  };
  
  //create a query selector for the button filters
  const showAllButton = document.querySelector("#All");
  const showGryffindorButton = document.querySelector("#Gryffindor");
  const showHufflepuffButton = document.querySelector("#Hufflepuff");
  const showRavenclawButton = document.querySelector("#Ravenclaw");
  const showSlytherinButton = document.querySelector("#Slytherin");

//create the function for filter Toggle//
  const filter = (typeString) => {
    filterToggle = false;
    filterToggle = true;
    const typeArray = [];
  
    for (const member of students) {
      if (member.type === typeString) {
        typeArray.push(member);
      }
    }
  //create the cardsOnDom for the type array
    cardsOnDom (typeArray);
  };
  
  
  
  //show buttons and add the event listeners
  showAllButton.addEventListener("click", (e) => {
    filterToggle = true;
    cardsOnDom(students);
  });
  
  showGryffindorButton.addEventListener("click", (e) => {
     filter("Gryffindor");
  });
  
  showHufflepuffButton.addEventListener("click", (e) => {
    filter("Hufflepuff");
  });
  
  showRavenclawButton.addEventListener("click", (e) => {
    filter("Ravenclaw");
  });

  showSlytherinButton.addEventListener("click", (e) => {
    filter("Slytherin");
  });

//create the query selector for the form to use 
  const form = document.querySelector('form');


   //add the create a new student event listener
  const createNewStudent = (e) => {
    e.preventDefault(); // EVERY TIME YOU CREATE A FORM
  
  //add the info values for the new student
  const newStudentObj = {
    id: students.length + 1,
    name: document.querySelector("#name").value,
    type: document.querySelector("#type").value,
    age: document.querySelector("#age").value,
    power: document.querySelector("#power").value,
    house: document.querySelector("#house").value,
    imageUrl: document.querySelector("#image").value
    }

  //push the new Student to the DOM
  students.push(newStudentObj);
  cardsOnDom(students);
  form.reset();
}

  //add event listener for the new student
  form.addEventListener('submit', createNewStudent);

  
 //add the query selector for the app
  const app = document.querySelector("#app");


   //add the query selector that returns the element
  app.addEventListener('click', (e) => {
 
  
  //add the target id for the delete
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    
  
  const index = students.findIndex(e => e.id === Number(id));
  
  const student = students.find((p) => p.id === Number(id))

  students.splice(index, 1);

  
  if (filterToggle) {
    cardsOnDom(students) 
  } else {
  
    //use proper filtering selection
    filter(student.house);
  }
  
  }
  });
  
  const startApp = () => {
    cardsOnDom(students);
  };
  startApp();
   
  console.log ("Hello World");
  