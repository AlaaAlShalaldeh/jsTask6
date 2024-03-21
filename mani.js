const button=document.querySelector(".test button");
button.onclick=e=>{
    document.querySelector(".box").classList.remove("d-none");
    document.querySelector(".overlay").classList.remove("d-none");
}
const svg=document.querySelector("svg");
svg.onclick=e=>{
    document.querySelector(".box").classList.add("d-none");
    document.querySelector(".overlay").classList.add("d-none"); 
}