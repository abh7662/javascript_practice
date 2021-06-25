let myLeads = ["wwww.google.com","wwww.google.com","wwww.google.com","wwww.google.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")
inputBtn.addEventListener("click",handleClick)
renderLeads() 
function handleClick(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()   
}
function renderLeads(){
    // console.log(myLeads)
    // const liEl = document.createElement("li")
    // liEl.textContent = inputEl.value
    // ulEL.append(liEl)
    let htmlText = ""
    for(lead of myLeads){
        htmlText += `
            <li>
                <a href=${lead} target="_blank">
                    ${lead}
                </a>
            </li>`
    }
    ulEL.innerHTML = htmlText
    
}
