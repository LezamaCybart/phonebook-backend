require('dotenv').config()
const { request, response } = require("express");
const express = require("express");
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person');
const person = require('./models/person');

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get("/info", (request, response) => {
    response.send(`<h1>Phonebook has info for ${persons.length} people<h1>
        <h1>${Date()}</h1>`)
})

app.get("/api/persons", (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get("/api/persons/:id", (request, response) => {
    Person.findById(request.params.id).then(person => {
        response.json(person)
    })
})

app.delete('/api/persons/:id', (request, response) => {
    Person.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body

    const person = {
        number: body.number
    }

    Person.findByIdAndUpdate(request.params.id, person, { new: true })
        .then(updatedPerson => {
            response.json(updatedPerson)
        })
        .catch(error => next(error))
})

/* 
const generateId = () => Math.floor(Math.random() * 100)
const nameAlreadyExists = (name) => {
    Person.find({}).then(persons => {
        const names = persons.map(person => person.name)
        return names.include(name)
    })
    const names = persons.map(person => person.name)
    return names.includes(name)
}
*/

app.post('/api/persons/', (request, response) => {
    const body = request.body
    //console.log(body.content)

    if (body == undefined) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
})


const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') { 
        return response.status(400).send({error: 'malformatted id'})
    }

    next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
