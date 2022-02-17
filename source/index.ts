import {database} from "./database";

const express = require("express")
const app = express()

app.get('/Team',async (req, res) => {


    await database.connect()

    let databaseNames = await database.db().admin().listDatabases()

    res.send(databaseNames)
    await database.close()

})


app.listen(3000)
