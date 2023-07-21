//Add and display items as a list.

//Assigning HTML elemetns with DOM.
const itemInput = document.getElementById("itemInput")
const shopList = document.getElementById("shopList")

// Function to submit and display items as a list.
function addItem()
{
  const itemText = itemInput.value
  const listItem = document.createElement("li")
  listItem.textContent = itemText
  shopList.appendChild(listItem) 
  
  //Remove listItem from the shopList by click.
  listItem.addEventListener("click", function(){
  shopList.removeChild(listItem)
  })
}