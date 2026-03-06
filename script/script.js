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
         <button onclick="loadLevelsData(${lesson.level_no}) "  class="btn btn-outline btn-primary"> 
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
    // get each element
    Levels.forEach(level => {
        // create div for each element 
        const levelDiv = document.createElement("div")
        levelDiv.innerHTML =
            `
  <div class=" p-10 bg-white rounded-xl  md:p-20 text-center space-y-3  ">
        <h3>${level.word}</h3>
        <p>Meaning /Pronounciation</p>
        <p class="font-bangla">${level.meaning}/${level.pronunciation}</p>
       </div>
       `;
        //append the div into the parent

        LevelContainer.appendChild(levelDiv)
    });

}


