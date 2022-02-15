const http = new EasyHTTP;

// GET USERS

http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));


//USER Data
const data = {
  name: 'Gustavo Bernardo',
  username: 'GB7',
  email: 'gustavo@gmail.com'
}  

// POST USERS
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// PUT USERS
http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));

// DELETE USERS
http.delete('https://jsonplaceholder.typicode.com/users/3')
.then(data => console.log(data))
.catch(err => console.log(err));