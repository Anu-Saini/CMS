



const saveBlogHandler = async (event) => {

  event.preventDefault();
  const data = document.getElementById('content').value.trim();
  const reqBody = {something: data};
  const id = window.location.href.split("/")[4].replace("?","");
  
 
  if (data) {
    // Send a Get request to the API endpoint
    const response = await fetch(`${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body:  JSON.stringify(reqBody)
    });
 
    if (response.ok) {
      // If successful, redirect the browser to the profile page
     console.log('ok');
     // document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
 };
 document.getElementById('save-blog').addEventListener('click', saveBlogHandler);
 
 
 
 const newCommentHandler = async (event) => {
   event.preventDefault();
   const comment = document.getElementById("new-comment").value;
   const data = document.getElementById('content').value.trim();
   const id = window.location.href.split("/")[4].replace("?","");
   
   const payload = {
     blog_id: id,
     comment: comment,
   };
 
   if (id) {
     // Send a Get request to the API endpoint
     const response = await fetch(`./comment`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(payload),
     });
 debugger
     if (response.ok) {
       document.location.reload();
     } else {
       alert(response.statusText);
     }
   }
 };
 
 
 document.getElementById('save-comment').addEventListener('click', newCommentHandler);