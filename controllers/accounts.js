const { response } = require('express')
const axios = require('axios')

const url = `https://${process.env.USER}:${process.env.PASSWORD}@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/accounts`;


const accountsGet = (req, res = response) => {
    axios
        .get(url)
        .then((result) => {
            res.status(200).json({
                accounts: result.data
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
    axios
        .get(`${url}/${id}`)
        .then((result) => {
            res.status(200).json({
                id: result.data.id,
                name : result.data.lookupName,
                login: result.data.login,
                notification: result.data.emailNotification.lookupName,
                staff: {
                    id: result.data.staffGroup.id,
                    name: result.data.staffGroup.lookupName
                },
                perfil: {
                    id: result.data.profile.id,
                    name: result.data.profile.lookupName
                }
            })
        })
        .catch((error) => {
            if (error.response.status === 404) {
                res.status(404).json({
                    error: `La cuenta ${id} no está registrada`
                })
            } else {
                res.status(500).json({
                    error: error.message
                })
            }
        })
}

const accountPatch = (req, res = response) => {

    const { id } = req.params;
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
            if (error.response.status === 404) {
                res.status(404).json({
                    error: `La cuenta ${id} no está registrada`
                })
            } else {
                res.status(500).json({
                    error: error.message
                })
            }
        })
}

const accountDelete = (req, res = response) => {
    const { id } = req.params;
    axios
        .delete(`${url}/${id}`)
        .then((result) => {
            res.status(200).json({
                msg: `Account ${id} deleted`,
            })
        })
        .catch((error) => {
            if (error.response.status === 404) {
                res.status(404).json({
                    error: `La cuenta ${id} no está registrada`
                })
            } else {
                res.status(500).json({
                    error: error.message
                })
            }
        })

}



module.exports = {
    accountsGet,
    accountGetbyId,
    accountPatch,
    accountDelete
}