const { response } = require('express')
const axios = require('axios')
const control_errores = require('../helpers/control_errores')

const url = `https://${process.env.USER}:${process.env.PASSWORD}@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/accounts`;


const accountsGet = (req, res = response) => {
    axios
        .get(url)
        .then((result) => {
            res.status(200).json({
                accounts: result.data.items
            })
        })
        .catch((error) => {
            res.status(500).json({
                error: error.message
            })
        })
}

const accountGetbyId = (req, res = response) => {

    const { id } = req.params;
    const parts = req.url.split('/');

    axios.get(`${url}/${id}`)
        .then((result) => {
            res.status(200).json({
                id: result.data.id,
                name: result.data.lookupName,
                login: result.data.login,
                notification: result.data.emailNotification,
                perfil: {
                    id: result.data.profile.id,
                    name: result.data.profile.lookupName
                }
            })
        }).catch((error) => {
            control_errores(error, res, req, id, parts);
        })
}

const accountPatch = (req, res = response) => {

    const { id } = req.params;
    const parts = req.url.split('/');

    axios
        .patch(`${url}/${id}`, {
            "login": req.body.login
        })
        .then((result) => {
            res.status(200).json({
                msg: `Cuenta ${id} actualizada`,
            })
        })
        .catch((error) => {
            control_errores(error, res, req, id, parts);
        })
}

const accountDelete = (req, res = response) => {
    const { id } = req.params;
    const parts = req.url.split('/');

    axios
        .delete(`${url}/${id}`)
        .then((result) => {
            res.status(200).json({
                msg: `Account ${id} deleted`,
            })
        })
        .catch((error) => {
            control_errores(error, res, req, id, parts);
        })
}



module.exports = {
    accountsGet,
    accountGetbyId,
    accountPatch,
    accountDelete
}