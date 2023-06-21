import express from 'express';      
import { config } from 'dotenv';
import usersRoutes from './routes/users.js';

const app = express();

config()
const port = (process.env.PORT || 3000)
app.use(express.json());
app.use('/users', usersRoutes)

app.get('/', (req,res)=>{
    console.log("{TEST}!!!")
    res.send("ON HOMEPAGE")
})

app.listen(port, ()=>{
    console.log(`Server running on port: http://localhost:${port}`)
})