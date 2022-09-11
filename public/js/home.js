// JS TO HANDLE LOGIN
const editBlogHandler = async (event) => {
  //event.preventDefault();
 
 const id = event.id;
 
  if (id) {
    // Send a Get request to the API endpoint
    const response = await fetch(`blog/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
 
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/blog');
    } else {
      alert(response.statusText);
    }
  }
 };
