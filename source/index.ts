import {database} from "./database";
import {IdMongodb} from "./id-mongodb/id-mongodb";
import {JwtToken} from "./jwt-token/jwt-token";

const express = require("express")
const app = express()

app.use(express.json())
require('dotenv').config({path: `${__dirname}\.env`})


app.get('/Team',async (req, res) => {


    await database.connect()

    let idMongoDb = new IdMongodb()
    let newTeamId = await idMongoDb.getNextTeamId()



    res.send(newTeamId)
    await database.close()

})

app.get('/Login',async (req: any, res: any) => {

    await database.connect()


    let jwtTokenObject = new JwtToken()
    let jwtToken = await jwtTokenObject.createToken(req, database)

    if (!jwtToken) {
        res.sendStatus(401)
    }
    if (jwtToken) {
        res.send(jwtToken)
    }

    await database.close()

})



app.listen(3000)
