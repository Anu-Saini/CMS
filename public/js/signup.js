

const signupFormHandler = async (event) => {
  event.preventDefault();
 
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  
 
  if (name && email && password ) {
    const response = await fetch("./signup", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    });
 
    if (response.ok) {
      document.location.replace("../dashboard");
    } else {
      alert(response.statusText);
      document.location.reload();
    }
  }
 };
 
 document
  .querySelector("#signupForm")
  .addEventListener("submit", signupFormHandler);
 
