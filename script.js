myLeads=[]
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.getElementById("delete-btn");
const saveTab = document.getElementById("save-tab")

const leadsFromLocalStrogae = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStrogae)
{
  myLeads = leadsFromLocalStrogae;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems +=
      // "<li> <a  target= '_blank' href='" +
      // myLeads[i] +
      // "'>" +
      // myLeads[i] +
      // "</a></li>";

      `<li> 
    <a target="_blank" href="${leads[i]}">${leads[i]}</a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
} 

saveTab.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  })
})

deleteBtn.addEventListener("dblclick", function()
{
  localStorage.clear();
  myLeads = [];
  render(myLeads);
})

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value  = "" ;
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  console.log(localStorage.getItem("myLeads"));
});



