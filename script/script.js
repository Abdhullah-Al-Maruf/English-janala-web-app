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

const loadData = async ()=>{
    try {
    const url="https://openapi.programming-hero.com/api/levels/all"
    const res =await fetch(url)
    const jsonData=await res.json(); 
    displayData(jsonData.data);
    } catch (error) {
        console.log("error fetching data ");
    }
}

const displayData=(levels)=>{
    //1. get the  container and clear
    const allLevelContainer=document.getElementById("lesson-container");
    allLevelContainer.innerHTML=""
    //2. get the each element
    levels.forEach(level => {
        //3. create element for each element 
        const btnDiv=document.createElement("div")
        btnDiv.innerHTML=
        `
         <button class="btn btn-outline btn-primary"> 
         <i class="fa-solid fa-book-open"></i>Lesson-${level.level_no}</button>
        `
        
         //4.append to the parent container
         allLevelContainer.appendChild(btnDiv)
         
        
    });

}
loadData();
