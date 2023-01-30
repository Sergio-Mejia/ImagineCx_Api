const { response } = require('express')
const axios = require('axios')
const control_errores = require('../helpers/control_errores')


const allDelete = (req, res = response) => {
    const { id } = req.params;
    const parts = req.url.split('/');
    const url = `https://${process.env.USER}:${process.env.PASSWORD}@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/${parts[1]}`;
   
    axios
        .delete(`${url}/${id}`)
        .then((result) => {
            res.status(200).json({
                msg: `${parts[1]} ${id} deleted`,
            })
        })
        .catch((error) => {
            control_errores(error, res, req, id, parts);
        })
}

module.exports = allDelete;