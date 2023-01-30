const { response } = require('express')
const axios = require('axios')
const control_errores = require('../helpers/control_errores')


const allGetbyId = (req, res = response) => {
    
    const { id } = req.params;
    const parts = req.url.split('/');
    const url = `https://${process.env.USER}:${process.env.PASSWORD}@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/${parts[1]}`;

    axios
        .get(`${url}/${id}`)
        .then((result) => {
            res.status(200).json({
                all: result.data
            })
        })
        .catch((error) => {
            control_errores(error, res, req, id, parts);
        })
}

module.exports = allGetbyId