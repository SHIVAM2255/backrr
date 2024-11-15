const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dotenv = require('dotenv')

const dbConnection = require('./db')
app.use(express.json())
const cors = require('cors');

//env config
dotenv.config();
app.use(cors());

app.use('/api/cars/' , require('./routes/carsRoute'))
app.use('/api/users/' , require('./routes/usersRoute'))



const path = require('path')

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.send('Hello world')//File(path.resolve(__dirname, 'client/build/index.html'));

    })

}

app.get('/', (req, res) => res.send('Hello World!'))


 


app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))