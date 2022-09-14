

const createpostHandler = async (event) => {
  event.preventDefault();
 const title = document.getElementById('title').value.trim();
 const content = document.getElementById('content').value.trim();
 
 
 // const id = window.location.href.split("/")[4].replace("?","");
  if (title && content) {
    // Send a Get request to the API endpoint
    const response = await fetch(`/blog`, {
      method: 'POST',
      body: JSON.stringify( {title: title, content: content}),
      headers: {
       'Content-Type': 'application/json',
     },
    });
 
    if (response.ok) {
     document.location.replace('/dashboard');
   } else {
     alert('Failed to create project');
   }
 }
 };
 
 document.getElementById('save-blog').addEventListener('click', createpostHandler);
 
