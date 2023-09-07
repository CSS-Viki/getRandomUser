const username = document.querySelector(".info-user p:nth-child(1)");
const useremail = document.querySelector(".info-user p:nth-child(2)");
const userphone = document.querySelector(".info-user p:nth-child(3)");
const userlocation = document.querySelector(".info-user p:nth-child(4)");
const userage = document.querySelector(".info-user p:nth-child(5)");
const button = document.querySelector(".btn");
const userImg = document.querySelector("#user-image");

function fetchUSer() {
  showSpinner();
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      username.innerHTML = `Name: ${data.results[0].name.first} ${data.results[0].name.last}`;
      useremail.innerHTML = `Email: ${data.results[0].email}`;
      userphone.innerHTML = `Phone: ${data.results[0].cell}`;
      userlocation.innerHTML = `Location: ${data.results[0].location.city}`;
      userage.innerHTML = `Age: ${data.results[0].dob.age}`;
      userImg.src = `${data.results[0].picture.large}`;
      hideSpinner();
      changeColor(data);
    });
}
function changeColor(colour) {
  if (colour.results[0].gender === "female") {
    document.body.style.backgroundColor = "pink";
  } else {
    document.body.style.backgroundColor = "blue";
  }
}

function showSpinner() {
  document.querySelector(".spinner").style.display = "block";
}
function hideSpinner() {
  document.querySelector(".spinner").style.display = "none";
}

function runFunctions() {
  fetchUSer();
  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      fetchUSer();
    }
  });

  button.addEventListener("click", fetchUSer);
}

runFunctions();
