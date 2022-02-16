import {MongoClient} from "mongodb";


const express = require("express")
const app = express()

app.get('/Team',async (req, res) => {

    let database = new MongoClient("mongodb://127.0.0.1:27017/")
    await database.connect()
    let databaseNames = await database.db().admin().listDatabases()

    res.send(databaseNames)


})


app.listen(3000)
