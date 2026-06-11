const serverError500 = ((err, req, res, next) => {
    res.status(500)
    res.json({
        message: 'Errore 500'
    })
})

module.exports = serverError500