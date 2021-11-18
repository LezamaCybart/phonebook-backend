const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length == 3) {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = 
    `mongodb+srv://pb-admin:${password}@cluster0.mxo19.mongodb.net/persons?retryWrites=true&w=majority`
    //`mongodb+srv://fullstack:${password}@cluster0.09oq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url)


const person = new Person({
    name: name,
    number: number
})

person.save().then(result => {
    console.log(`added ${person.name} number ${person.number} to phonebook`)
    mongoose.connection.close()
})

