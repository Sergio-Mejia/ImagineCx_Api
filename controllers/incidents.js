const { response } = require('express')
const axios = require('axios')
const control_errores = require('../helpers/control_errores')

const url = `https://${process.env.USER}:${process.env.PASSWORD}@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/incidents`;



const incidentGetbyId = (req, res = response) => {

    const { id } = req.params;
    const parts = req.url.split('/');
    axios
        .get(`${url}/${id}`)
        .then((result) => {
            res.status(200).json({
                id: result.data.id,
                name: result.data.lookupName,
                createdTime: result.data.createdTime,
                subject: result.data.subject,
                statusWithType: {
                    status: result.data.statusWithType.status.lookupName,
                    type: result.data.statusWithType.statusType.lookupName
                }
            })
        })
        .catch((error) => {
           control_errores(error, res, req, id, parts);
        })
}




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
    incidentGetbyId,
    incidentPatch,
}