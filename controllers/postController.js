
const postsArray = require('../data/posts')


//INDEX-POSTS-ARRAY

// const index = (req, res) => {
//     res.json(postsArray)
// }

//INDEX

// const index = (req, res) => {
//     res.send('index of post')
// }



//INDEX-FILTER

const index = (req, res) => {

    const tag = req.query.tag

    if (tag) {
        const filteredPost = postsArray.filter(item => item.tags.includes(tag))
        return res.json(filteredPost)
    }
    console.log(filteredPost);
}


//SHOW

// const show = (req, res) => {
//     res.send('show of post with id')
// }

//SHOW-SINGLE-POST

const show = (req, res) => {
    //cerco Id
    const id = parseInt(req.params.id)
    //cerco il post tramite id
    const singlePost = postsArray.find(item => item.id === id)
    //restituisco sotto forma di Json
    res.json(singlePost)
}


//STORE-POST
const store = (req, res) => {
    // res.send('store of post with')

    //creo un nuovo ID ed incremento
    const newId = postsArray[postsArray.length - 1].id + 1

    //creo nuovo oggetto per il post
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }
    // aggiungo il nuovo post 

    postsArray.push(newPost)

    //loggo in in console
    console.log(postsArray);
    console.log(newPost);


    //restituisco il nuovo status

    res.status(201)
    res.json(newPost)


}

//UPDATE

const update = (req, res) => {
    // res.send('update of post with id ')

    const id = parseInt(req.params.id)

}


//MODIFY

const modify = (req, res) => {
    res.send('modify of post with id ')
}


//DESTROY

// const destroy = (req, res) => {
//     res.send('destroy of post with id ')
// }


const destroy = (req, res) => {

    const id = parseInt(req.params.id)
    console.log(typeof req.params.id);
    console.log(typeof parseInt(req.params.id));



    const postId = postsArray.find(item => item.id === id)
    if (!postId) {
        res.status(404)

        return res.json({
            status: 404,
            error: 'Not Found',
            message: 'post Id non trovato'
        })

    }

    //rimuovo il post
    postsArray.splice(postsArray.indexOf(postId), 1)

    console.log(postsArray);


    // status 204
    res.sendStatus(204)
}


module.exports = { index, show, store, update, modify, destroy }