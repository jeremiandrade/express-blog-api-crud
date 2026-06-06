const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')


////////////. ROUTER . ////////////////

//index

// app.get('/', (req, res) => {
//     res.send('index of post')
// })

//show

// app.get('/:id', (req, res) => {
//     res.send('show of post with id')
// })

//post-store

// app.post('/', (req, res) => {
//     res.send('store of post')
// })

//put-update

// app.put('/:id', (req, res) => {
//     res.send('update of post with id')
// })

//patch-modify

// app.patch('/:id', (req, res) => {
//     res.send('modify of post with id')
// })

//delete-destroy

// app.delete('/:id', (req, res) => {
//     res.send('destroy of post with id')
// })

///////////////////////////////

//INDEX-GET

router.get('/', postController.index)

//SHOW-GET
router.get('/:id', postController.show)

//STORE-POST
router.post('/', postController.store)

//UPDATE-PUT
router.put('/:id', postController.update)


//MODIFY-PATCH
router.patch('/:id', postController.modify)

//DESTROY-DELETE
router.delete('/:id', postController.destroy)

//EXPORT
module.exports = router