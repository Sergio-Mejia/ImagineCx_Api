const { response } = require('express')
const axios = require('axios')
const control_errores = require('../helpers/control_errores')

const url = `https://${process.env.USER}:${process.env.PASSWORD}@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/incidents`;


const incidentPatch = (req, res = response) => {

    const { id } = req.params;
    const parts = req.url.split('/');
    axios
        .patch(`${url}/${id}`, {
            "subject": req.body.subject
        })
        .then((result) => {
            res.status(200).json({
                msg: `Incidente ${id} actualizado`
            })
        })
        .catch((error) => {
            control_errores(error, res, req, id, parts);
        })
}



module.exports = {
    incidentPatch,
}