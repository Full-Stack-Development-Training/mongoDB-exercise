const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/fruitsDB')

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'No name specified'],
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

const Fruit = mongoose.model('Fruit', fruitSchema)

const fruit = new Fruit ({
    name: 'Apple',
    rating: 10,
    review: "Pretty solid apple"

})

// fruit.save()

const personSchema = new mongoose.Schema ({
   name: String,
   age: Number,
   favouriteFruit: fruitSchema
})
const Person = mongoose.model("Person", personSchema)

// const pineapple = new Fruit({
//     name: "Pineapple",
//     score: 9,
//     review: "Great fruit"
// })

// pineapple.save()

const mango = new Fruit({
    name: "Mango",
    score: 3,
    review: "Too yummy eat too much!"
})

mango.save()

// const person = new Person ({
//     name: 'Amy',
//     age: 12,
//     favouriteFruit: pineapple
// })

// person.save()

const person = new Person ({
    name: 'John',
    age: 37,
    favouriteFruit: mango
})

person.save()


// Person.updateOne({name: "John"}, {favouriteFruit: mango}, (err) => {
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("Successfully updated the document")
//     }
// })


// const kiwi = new Fruit({
//     name: 'Kiwi',
//     score: 10,
//     review: "Kiwi as"
// })

// const orange = new Fruit({
//     name: 'Orange',
//     score: 6,
//     review: "Too sour"
// })

// const banana = new Fruit({
//     name: 'Banana',
//     score: 7,
//     review: "Too yellow"
// })

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("Succesfully saved all the fruits to fruitsDB")
//     }

// })

// Fruit.find((err, fruits) => {
//     if(err) {
//         console.log(err)
//     }else{
//         mongoose.connection.close()
//         fruits.forEach(fruit => console.log(fruit.name))
//     }
// })

// Fruit.updateOne({_id: '6152a3d2d587e02e78a172bb'}, {name: "Peach"}, (err) => {
//     if(err) {
//         console.log(err)
//     }else{
//         console.log('Successfully updated')
//     }
// })

// Fruit.deleteMany({name: 'Apple'}, (err) => {
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("Successfully deleted the document")
//     }
// })

// Person.deleteMany({name: 'John'}, (err) => {
//     if (err) {
//         console.log(err)
//     }else{
//         console.log("Successfully deleted the document")
//     }
// })

