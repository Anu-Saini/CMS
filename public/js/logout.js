// JS TO HANDLE LOG OUT
var logout = async () => {
  var response = await fetch('/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
 
  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
 };
 
 if (document.querySelector('#log-out')) {
    document
    .querySelector('#log-out')
    .addEventListener('click', logout);
 }
 
