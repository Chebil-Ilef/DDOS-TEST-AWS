const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('Testing the app')
  })

  app.post('/submit', (req, res) => {
    // Access the data sent in the request body
    const { name, age } = req.body;
  
    // Simple response
    res.send(`Received data: Name is ${name} and Age is ${age}`);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
