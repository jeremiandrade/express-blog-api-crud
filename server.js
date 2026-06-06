const express = require('express')
const app = express()
const port = 3000

const postRouter = require('./routers/postRouter')



//definisco la rotta 
app.get('/', (req, res) => {
    res.json({ message: 'Hello World' })
})

//rotta router
app.use('/posts', postRouter)



///////////// ROTTE POST - POST.ID/////////////

//index

// app.get('/posts', (req, res) => {
//     res.send('index of post')
// })

//show

// app.get('/posts/:id', (req, res) => {
//     res.send('show of post with id')
// })

//post-store

// app.post('/posts', (req, res) => {
//     res.send('store of post')
// })

//put-update

// app.put('/posts/:id', (req, res) => {
//     res.send('update of post with id')
// })

//patch-modify

// app.patch('/posts/:id', (req, res) => {
//     res.send('modify of post with id')
// })

//delete-destroy

// app.delete('/posts/:id', (req, res) => {
//     res.send('destroy of post with id')
// })

/////////////////////////////////////////////////




//start server 
app.listen(port, () => {
    console.log(`Server Listening http://localhost:${port}`)
})


// Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers. 

// All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi). 

// Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.

// Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima. 

// Se tutto funziona, passiamo alla prossima milestone