const { response } = require('express')
const axios = require('axios')

const url = `https://${process.env.USER}:${process.env.PASSWORD}@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/incidents`;


const incidentGet = (req, res = response) => {
    axios
        .get(url)
        .then((result) => {
            res.status(200).json({
                incidents: result.data.items
            })
        })
        .catch((error) => {
            res.status(500).json({
                error: error.message
            })
        })
}


const incidentGetbyId = (req, res = response) => {

    const { id } = req.params;
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
            if (error.response.status === 404) {
                res.status(404).json({
                    error: `El incidente ${id} no está registrado`
                })
            } else {
                res.status(500).json({
                    error: error.message
                })
            }
        })
}



const incidentPatch = (req, res = response) => {

    const { id } = req.params;
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
            if (error.response.status === 404) {
                res.status(404).json({
                    error: `El incidente ${id} no está registrado`
                })
            } else {
                res.status(500).json({
                    error: error.message
                })
            }
        })
}

const incidentDelete = (req, res = response) => {
    const { id } = req.params;
    axios
        .delete(`${url}/${id}`)
        .then((result) => {
            res.status(200).json({
                msg: `Incident ${id} deleted`,
            })
        })
        .catch((error) => {
            if (error.response.status === 404) {    
                res.status(404).json({
                    error: `El incident ${id} no está registrado`
                })
            } else {
                res.status(500).json({
                    error: error.message
                })
            }
        })
}


module.exports = {
    incidentGet,
    incidentGetbyId,
    incidentPatch,
    incidentDelete
}