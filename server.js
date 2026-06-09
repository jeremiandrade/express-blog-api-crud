const express = require('express')
const app = express()
const port = 3000

const postRouter = require('./routers/postRouter')

//registro il bosdy-parser per poter leggere i dati
app.use(express.json())


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


// Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.