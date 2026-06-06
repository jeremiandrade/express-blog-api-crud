
//INDEX

const index = (req, res) => {
    res.send('index of post')
}

//SHOW

const show = (req, res) => {
    res.send('show of post with id')
}


//STORE
const store = (req, res) => {
    res.send('store of post with id ')
}

//UPDATE

const update = (req, res) => {
    res.send('update of post with id ')
}


//MODIFY

const modify = (req, res) => {
    res.send('modify of post with id ')
}


//DESTROY

const destroy = (req, res) => {
    res.send('destroy of post with id ')
}

module.exports = { index, show, store, update, modify, destroy }