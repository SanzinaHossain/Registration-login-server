const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000
const cors=require('cors')
require('dotenv').config()
//middle wire for cors
app.use(cors())
app.use(express.json())
//database connect

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ja1qmmm.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
          await client.connect();
          console.log("connecetd")
    }
    finally{
 
    }
  }
  run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Registration_Login')
  })

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
