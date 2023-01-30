const { response } = require('express')
const axios = require('axios')



const allGet = (req, res = response) => {
    const parts = req.url.split('/');
    const url = `https://${process.env.USER}:${process.env.PASSWORD}@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/${parts[1]}`;
    axios
        .get(url)
        .then((result) => {
            res.status(200).json({
                all: result.data.items
            })
        })
        .catch((error) => {
            res.status(500).json({
                error: error.message
            })
        })
}


module.exports = {
    allGet,
}