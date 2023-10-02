// Add your code here

// fetch API
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name: name, email: email }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      // console.log(data);
      document.querySelector("body").textContent = data.id;
    })
    .catch((err) => {
      // console.log(err);
      document.querySelector("body").textContent = err;
    });
}

// submitData("John Doe", "johndoe@gmail.com");
