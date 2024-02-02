//create your arrays
const classPlacement = ['Gryffindor', 'Hufflepuff', 'Ravenclaw','Slytherin']

//create your variables for the domString
const students = []
const expelledStudents = []

//create your welcome function button display
function showDiv() {
  document.getElementById('welcomeDiv').style.display = "block";
}

//create your renderToDom
const renderToDom = (array) => {

  let domString = ""

//create your .map instead of a for of loop
array.map((object, index) => {
  domString += 
      `<div id="newStudent" class="card mb-3"  style="max-width: 340px;">
        <div class="row g-0">
          <div class="col-md-4" id="${object.house}">
          </div>
          <div class="col-md-8">
            <div class="card-body" >
              <h5 class="card-titles" id ="nameCard">${object.name}</h5>
              <p class="card-text">${object.house.toUpperCase()}</p>
              <button type ="button" class="btn btn-danger" id="expel--${index}" >EXPEL</button>
            </div>
          </div>
        </div>
      </div>`
    })
    app.innerHTML = domString
}

//add the query selectors for the buttons and filters
const showAllButton = document.querySelector("#All");
const showGryffindorButton = document.querySelector("#Gryffindor");
const showHufflepuffButton = document.querySelector("#Hufflepuff");
const showRavenclawButton = document.querySelector("#Ravenclaw");
const showSlytherinButton = document.querySelector("#Slytherin");


//add the event listeners for the buttons and filters
showAllButton.addEventListener("click", (e) => {
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


//add the query selector for the form and match the selector
const form = document.querySelector("form")


//add the event listener for the submit button
form.addEventListener('submit',  (e) => {
  e.preventDefault()
  

//add the variable for the new student
    const newStudentObj ={
//add the 
      id: students.length + 1,
//add the query selector for entering the students name
      name: document.querySelector("#studentName").value,
//add the randomizer
      house: classPlacement[Math.floor(Math.random() * classPlacement.length)],     
      studentId: Math.floor(Math.random() * 100)  + 1
//studentId: Math.floor(Math.random() * (999 - 100) ) + 100
      }


//add the push method to add new items to the end of the array
    students.push(newStudentObj)
    renderToDom(students)
    form.reset()
  })


//add the query selector for the expel array
const pit = document.querySelector("#pit")


//add the render to expel student array
const renderToPit = (array) => {
  let domStringPit = ""

  //create your .map instead of a for of loop
  array.map((object, index) => {
    domStringPit += 
        `<div id="newstudent" class="card m-1" style="width: 15rem;" id="${index}">
        <img src="https://www.looper.com/img/gallery/harry-potter-all-the-villains-ranked-from-bad-to-diabolical/l-intro-1678283151.jpg" alt="Team">
        <div class="card-body text-center">
          <p class="h6 card-text text-dark">Unfortunately... <span class="text-dark">${object.name}</span>, is no longer a student!</p>
        </div>
      </div>`
      })
      pit.innerHTML = domStringPit
  }


//add the expel student variable with the query selector
const expelStudent = document.querySelector("#app")

//add the expel student event listener
expelStudent.addEventListener("click", (e) => {
  if(e.target.id.includes("expel")){
    const [, index] = e.target.id.split("--");
    //add the push method to add new items to the end of the array
      expelledStudents.push(students[index])

      //add the .splice method to remove student element
      students.splice(index, 1)

    renderToDom(students)
    renderToPit(expelledStudents)
  }
})

//add the house filter
const filter = (house) => {
  const filteredArray = []

//pet adoption had a for of loop...I turned this into a for Each loop??
  this.studentList.forEach((studentList, i) => {
    studentList.checked = this.selectedStudents.includes(i)
  })
      if(object.house === house){
        filteredArray.push(object)
    }
    renderToDom("#app", filteredArray)
  }

//add the query selector for the filter buttons
const filterButtons = document.querySelector("#filter-buttons")
filterButtons.addEventListener("click", (e) => {

//create the id selectors for the houses
  const id = e.target.id 
  const possibleHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]

  if(id === "all"){
    renderToDom(students)
  } else if(possibleHouses.includes(id)){
    filter(id)
  }

});

//from pet adoption
const startApp = () => {

  renderToDom(students)
  events()
}

startApp()

