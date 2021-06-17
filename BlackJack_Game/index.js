const increment=document.querySelector(".increment")
const count=document.querySelector(".count")
let countValue = parseInt(count.textContent)
const previousentries = document.querySelector(".previousentries")
let entries ="Previous entries: "
increment.addEventListener("click",()=>{
    countValue++
    count.textContent = countValue
})
function save(){
    entries += countValue + " - "
    previousentries.textContent = entries
    countValue = 0
    count.textContent = countValue
}