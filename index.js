const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.get('/user-data', (req,res) => {
    const user ={
        name: 'Harrison Chen',
        email: 'hbc@mail.com',
    }
    res.send(user);
});

app.get('/', (req,res) => {
    res.send('<h1>BackEnd Rocks!</h1>')
});

app.listen(PORT, ()=>{
    console.log('Server running at localhost:'+ PORT);
}).on('error',(err)=>{
    console.log('Server error:', err.message);
    console.log('Do you already have a server running on PORT:'+PORT);
});
