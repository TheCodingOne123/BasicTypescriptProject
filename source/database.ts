import {MongoClient} from "mongodb";

const databaseString = "mongodb://localhost:27017"
export const database = new MongoClient(databaseString)

export async function connect()
{
    await database.connect().catch((reason) => {
        console.log("something went wrong with the database connection")

    }).then((value) => {
        console.log("Database connection Succeded")
    })
}

export async function close()
{
    await database.close()
}

module.exports = {
    database,
    connect,
    close
}
