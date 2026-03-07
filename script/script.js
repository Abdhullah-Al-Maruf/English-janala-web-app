// async function loadData() { 
// const res = await fetch(url); 
// const data = await res.json(); }

// loadData()= ()=>{
//     fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data);
//         displayData(data);
//     })
// }



// toggle
const btnToggle=() =>{
    // get the btn

}
btnToggle();

// for lesson fetch
const loadData = async () => {
    try {
        //data from this api
        const url = "https://openapi.programming-hero.com/api/levels/all"
        const res = await fetch(url)
        const jsonData = await res.json();
        displayData(jsonData.data);
    } catch (error) {
        console.log("error fetching data ");
    }
}

const displayData = (lessons) => {
    //1. get the  container and clear
    const LessonsContainer = document.getElementById("lesson-container");
    LessonsContainer.innerHTML = ""



    //2. get the each element
    lessons.forEach(lesson => {
        //3. create element for each element 
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML =
            `
         <button id="active-btn-${lesson.level_no}" onclick="loadLevelsData(${lesson.level_no}) "  class="get-btn btn btn-primary btn-outline "> 
         <i class="fa-solid fa-book-open"></i>Lesson-${lesson.level_no}</button>
        `

        //4.append to the parent container
        LessonsContainer.appendChild(btnDiv)

    });

}

loadData();


// for level card data fetching
// fetch data
const loadLevelsData = async (id) => {
    try {
        const url = `https://openapi.programming-hero.com/api/level/${id}`
        const res = await fetch(url);
        const json = await res.json();


// this code is for btn toggling color changing

// add and remove color class according to click
    const toggleBtns=document.querySelectorAll(".get-btn");
    toggleBtns.forEach(btn => {
        btn.classList.remove("active")
    
    });
    // /1. get the btn 
    const activeBtn =document.getElementById(`active-btn-${id}`)
    activeBtn.classList.add("active")
    
    // add color on click
   
        
        displayLevels(json.data)
    } catch (error) {
        console.log("data fetching error");
    }

}

// displayData
const displayLevels = (Levels) => {
    // get the container 
    const LevelContainer = document.getElementById("level-container");
    LevelContainer.innerHTML = "";

    // if no lesson it will show this div else not work
    if (Levels.length === 0) {
        LevelContainer.innerHTML =
            `
    <div class=" font-bangla text-center space-y-4 col-span-3">
  <img src="./assets/alert-error.png" alt="" class="mx-auto">
  <p class="text-gray-600">নেক্সট Lesson এ যান</p>
  <h1 class="text-3xl font-bold">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</h1>
</div>
      `

    }

    // get each element
    Levels.forEach(level => {
        // create div for each element 
        const levelDiv = document.createElement("div")
        levelDiv.innerHTML =
            `
  <div class=" p-10 bg-white rounded-xl  md:p-20 text-center space-y-5  ">
        <h3>"${level.word ? level.word:"শব্দ খুজে পাওয়া জাইনি"}</h3>
        <p>Meaning /Pronounciation</p>
        <p class="font-bangla">"${level.meaning ? level.meaning:"অর্থ খুজে পাওয়া জাইনি"}  /${level.pronunciation ? level.pronunciation:"pronnciation খুজে পাওয়া জাইনি "}"</p>
    <div class="flex justify-between mt-4">
      <button class="btn"><i class="fa-solid fa-circle-info"></i></button>
      <button class="btn"><i class="fa-solid fa-volume-high"></i></button>
     </div>
       </div>
       `;
        //append the div into the parent

        LevelContainer.appendChild(levelDiv)
    });

}


