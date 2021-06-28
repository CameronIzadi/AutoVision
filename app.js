const domain = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/'
const json = '?format=json'
const pictureURL = 'https://www.google.com/search?q='

let page = 0
let count = 0

let shortened = []
let picture = ""
// Global variables to collect information.

const button = document.getElementById("search")
const buttonUp = document.getElementById("move-up")
const buttonDown = document.getElementById("move-down")
const sectionN = document.querySelector(".car-list")


//Calling on API to collect data. Uses countSplice() to push variables for button, etc.
async function getData(thesee) {
  try {
    const carList = await axios.get(`${domain}${thesee}${json}`)
    shortened = [...carList.data.Results]
    picture = thesee
    countSplice(shortened, count, count + 10, page, thesee, "up")
    return shortened
   
  } catch (error) {
    console.error(error)
  }
}


// Button to collect data on search. First step.
button.addEventListener("click", () => {
  let response = document.querySelector("#blank").value
  getData(response)
  removeThis()
  return response
})

//Function to push a fixed amount in an array into an array of 10 each. Edits on button clicks.
function countSplice(array, begin, end, page, putin, direction) {
  console.log(count)

  function helper(array, begin, end, putin){
    let newArr = array.slice(begin, end)
    console.log(newArr)
  
  for (i = 0; i < newArr.length; i++){
    const titleDiv = document.createElement("div")
    titleDiv.classList.add("inside")
      sectionN.append(titleDiv)
      
      const imgThing = document.createElement("img")
    imgThing.setAttribute('src', `images/${putin}.png`)
    titleDiv.append(imgThing)
      
    const manufacteurName = document.createElement("h3")
    manufacteurName.textContent = `${newArr[i].Make_Name}`
    titleDiv.append(manufacteurName)

    const modelName = document.createElement("h3")
    modelName.textContent = `Model Name: ${newArr[i].Model_Name}`
    titleDiv.append(modelName)
    }
  }  
  if (direction === "up") {
    helper(array, begin, end, putin)
    count += 10;
    page += 1;
  } else if (direction === "down") {
    helper(array, begin - 20, end - 20, putin)
    count -= 10;
    page -= 1;
  }
}

//Button up to add variables.
buttonUp.addEventListener("click", () => {
  removeThis()
  if (count > shortened.length) {
    count = 0;
    page = 0;
  } else {
    countSplice(shortened, count, count + 10, page, picture, "up")
  }
})

//Button down to decrement variables.
buttonDown.addEventListener("click", () => {
  removeThis()
  if (count < 0) {
    count = 0;
    page = 0;
  } else {
    countSplice(shortened, count, count + 10, page, picture, "down")
  }
})

//Removes last thing on page to make room for next ten.
function removeThis() {
  while (sectionN.lastChild) {
    sectionN.removeChild(sectionN.lastChild)
  }
}

