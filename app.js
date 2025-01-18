const express = requires('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
res.send('Hello world from AKS');
});

app.listen(port, () => {
   console.log('App running on port ${port}');
});
