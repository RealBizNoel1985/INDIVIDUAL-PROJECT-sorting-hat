


const classPlacement = ['Gryffindor', 'Hufflepuff', 'Ravenclaw','Slytherin']
const students = []
const expelledStudents = []


function showDiv() {
  document.getElementById('welcomeDiv').style.display = "block";
}


const renderToDom = (array) => {

  let domString = ""

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

const showAllButton = document.querySelector("#All");
const showGryffindorButton = document.querySelector("#Gryffindor");
const showHufflepuffButton = document.querySelector("#Hufflepuff");
const showRavenclawButton = document.querySelector("#Ravenclaw");
const showSlytherinButton = document.querySelector("#Slytherin");


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


const form = document.querySelector("form")

form.addEventListener('submit',  (e) => {
  e.preventDefault()
  
    const newStudentObj ={
      id: students.length + 1,
      name: document.querySelector("#studentName").value,
      house: classPlacement[Math.floor(Math.random() * classPlacement.length)],
      studentId: Math.floor(Math.random() * 100)  + 1
      //studentId: Math.floor(Math.random() * (999 - 100) ) + 100
      }

    students.push(newStudentObj)
    renderToDom(students)
    form.reset()

  })


const pit = document.querySelector("#pit")

const renderToPit = (array) => {
  let domStringPit = ""

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





const expelStudent = document.querySelector("#app")

expelStudent.addEventListener("click", (e) => {
  if(e.target.id.includes("expel")){
    const [,index] = e.target.id.split("--");
      expelledStudents.push(students[index])
      students.splice(index, 1)
    renderToDom(students)
    renderToPit(expelledStudents)
  }
})


const filter = (house) => {
  const filteredArray = []

  this.studentList.forEach((studentList, i) => {
    studentList.checked = this.selectedStudents.includes(i)
  })
      if(object.house === house){
        filteredArray.push(object)
    }
    renderToDom("#app", filteredArray)
  }



const filterButtons = document.querySelector("#filter-buttons")
filterButtons.addEventListener("click", (e) => {
  console.log("click")
  const id = e.target.id 
  const possibleHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]

  if(id === "all"){
    renderToDom(students)
  } else if(possibleHouses.includes(id)){
    filter(id)
  }

  if (filterToggle) {
    cardsOnDom(pets) 
  } else {
  
  filter(house.type);
  }
});




const startApp = () => {

  renderToDom(students)
  events()
}

startApp()