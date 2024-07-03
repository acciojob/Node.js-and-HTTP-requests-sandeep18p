const https = require('https');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

https.get(apiUrl, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    try {
      const todo = JSON.parse(data);
      console.log(todo.title);
    } catch (error) {
      console.error('Error parsing JSON:', error.message);
    }
  });

}).on('error', (error) => {
  console.error('Error fetching todo:', error.message);
});
