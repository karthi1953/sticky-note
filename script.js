//plus
var plus = document.querySelector(".plus")
var inputpopup = document.querySelector(".input-popup")
var overlayblack = document.querySelector(".overlay-black")


plus.addEventListener("click",function (event) {
    inputpopup.style.display = 'inline-block'
    overlayblack.style.display = 'inline-block'

})

// cancel button
var cancelbutton = document.querySelector(".cancel-button")

cancelbutton.addEventListener("click", function (event) {
    inputpopup.style.display = 'none'
    overlayblack.style.display = 'none'
})

//add data store
var inputpopup = document.querySelector(".input-popup")
var wholecontainer = document.querySelector(".whole-container")

var inputtitle = document.querySelector(".input-title")
var inputdesc = document.querySelector(".input-desc")
var textareainput = document.querySelector(".textarea-input")

var addbutton = document.querySelector(".add-button")


addbutton.addEventListener('click', function () {
    var divtag = document.createElement("div")
    divtag.setAttribute("class", "note-container")

  divtag.innerHTML = `<h2>${inputtitle.value}</h2>
 <h5>${inputdesc.value}</h5>
  <p>${textareainput.value}</p>;
 <button onclick="deletefun(event)" type="button" class="delete-button">Delete</button>
`
 wholecontainer.append(divtag);

})




//delete button
var notecontainer = document.querySelector(".note-container")
var deletebutton = document.querySelector(".delete-button")

function deletefun (event){ 
    event.preventDefault()
    event.target.parentElement.remove()
}

