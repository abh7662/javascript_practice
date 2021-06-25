let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEL = document.getElementById("ul-el")
inputBtn.addEventListener("click",handleClick)
tabBtn.addEventListener("click",handleTab)
deleteBtn.addEventListener("dblclick",handleDelete)
// const tabs = [
//     {url: "https://www.google.com"}
// ]

// localStorage.clear()
const leadsfromlocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadsfromlocalStorage)
if(leadsfromlocalStorage){
    myLeads = leadsfromlocalStorage
    render(myLeads)
}
function handleTab(){
    // console.log(tabs[0].url)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    
}
function render(myLeads){
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
function handleDelete(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
}
function handleClick(){
    if(inputEl.value){
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)   
    }
}

