//Add and display items as a list.

//Assigning HTML elemetns with DOM.
const itemInput = document.getElementById("itemInput")
const shopList = document.getElementById("shopList")

// Empty array to store items
let itemsArray = []

// Function to submit and display items as a list.
function addItem()
{const itemText = itemInput.value //store input 

//error msg when submitting empty input.
  if (itemText === "")
    {
      alert("Please enter the item.")
      return 
    } 
  else 
    {
      itemsArray.push(itemText)
      const listItem = document.createElement("li")
      
      //create div segment
      const itemContainer = document.createElement("div")
      itemContainer.classList.add("container")
      
      //add the item text inside container
      const itemLabel = document.createElement("span")
      itemLabel.textContent = itemText
      itemLabel.title = "Click to remove."
      itemContainer.appendChild(itemLabel)
      
      //add counter inside the container
      const counter = document.createElement("span")
      counter.id = "counter"
      itemContainer.appendChild(counter)
      
      //add minus button inside the counter
      const minusButton = document.createElement("span")
      minusButton.classList.add("plusMinus")
      minusButton.textContent = "-"
      counter.appendChild(minusButton)
 
      //add number inside the counter
      const number = document.createElement("span")
      number.id = "number"
      number.textContent = 1
      counter.appendChild(number)
      
      //add plus button inside the counter
      const plusButton = document.createElement("span")
      plusButton.classList.add("plusMinus")
      plusButton.textContent = "+"
      counter.appendChild(plusButton)
      
      //add function to the minus button
      minusButton.addEventListener ("click", function()
                                   {
          let quantity = parseInt (number.textContent)
          if (quantity > 1)
            {
              quantity--
              number.textContent = quantity
            }
          else
            {
              shopList.removeChild(listItem)          
              const itemIndex = itemsArray.indexOf(itemText)
              itemsArray.splice(itemIndex, 1)
            }
      })
      
      //add function to the plus Button
      plusButton.addEventListener ("click", function()
                                  {
        let quantity = parseInt (number.textContent)
        quantity++
        number.textContent = quantity
      })
      
      //add container to the list item
      listItem.appendChild(itemContainer)
      
      //add the list item to the list
      shopList.appendChild(listItem)
      
      itemLabel.addEventListener("click", function()
                               {
        shopList.removeChild(listItem)
        const itemIndex = itemsArray.indexOf(itemText)
        itemsArray.splice(itemIndex, 1)
      })
    } 
 
  //Clear input field after Submit
  itemInput.value=""
}

//Remove all items from the list
function clearAll() 
{
  shopList.innerHTML=""
  itemsArray=[]
}
//------------------------//
