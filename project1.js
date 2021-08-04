let addnote = document.getElementById("addnote");
let textarea = document.getElementById("textarea");
let title = document.getElementById("title");
let bhai = 0;
printnote();

//adding an event listener for add note button
addnote.addEventListener("click", function (e) {
  let obj1 = {
    title1: title.value,
    text1: textarea.value,
  };

  let arrayA = JSON.parse(localStorage.getItem(`note`));
  if (arrayA == null) {
    arrayA = [];
    arrayA.push(obj1);
  } else {
    arrayA.push(obj1);
  }
  localStorage.setItem("note", JSON.stringify(arrayA));

  textarea.value = "";
  title.value = "";
  printnote();
});

//function to print the note and this function is called inside the click eventlistener on add note button;

function printnote() {
  let mynotes = document.getElementById("notes");
  let arrayA = JSON.parse(localStorage.getItem(`note`));
  if (arrayA == null) {
    mynotes.innerHTML = `<h1>Nothing to show here </h1>`;
  } else {
    let html = "";
    arrayA.forEach(function (element, index) {
      html += `<div class="card my-3 mx-3 notecard" style="width: 18rem;">
        <div class="card-body addednotes">
          <h5 class="card-title">${element.title1}</h5>
          <p class="card-text">${element.text1}</p>
          <button  class="btn btn-primary"  id="${index}" onclick="deletefunc(this.id)">Delete</a>
        </div>
      </div>`;
    });
    mynotes.innerHTML = html;
  }
}

//click eventlistener for delete button on mynotes
let mynotes = document.getElementById("notes");

function deletefunc(index) {
  let arrayA = JSON.parse(localStorage.getItem(`note`));
  arrayA.splice(index, 1); //splice removes the array element with from which index and how many from that index a theri parameters
  localStorage.setItem("note", JSON.stringify(arrayA));
  printnote();
}


searchbar = document.getElementById("searchbar");
notecards = document.getElementsByClassName("notecard");
searchbar.addEventListener("input", function () {
  inputVal = searchbar.value;

  Array.from(notecards).forEach(function (element) {
    let cardtext = element.getElementsByTagName("p")[0].innerText;
    if (cardtext.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
