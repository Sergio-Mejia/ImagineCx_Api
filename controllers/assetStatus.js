const { response } = require('express')
const axios = require('axios')

const url = `https://${process.env.USER}:${process.env.PASSWORD}@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/assetStatuses`;


const assetStatusGet = (req, res = response) => {
    axios
        .get(url)
        .then((result) => {
            res.status(200).json({
                assetStatus: result.data.items
            })
        })
        .catch((error) => {
            res.status(500).json({
                error: error.message
            })
        })
}

const assetStatusGetbyId = (req, res = response) => {

    const { id } = req.params;
    axios
        .get(`${url}/${id}`)
        .then((result) => {
            res.status(200).json({
                assetStatus: {
                    id: result.data.id,
                    name: result.data.lookupName,
                }
            })
        })
        .catch((error) => {
            if (error.response.status === 404) {
                res.status(404).json({
                    error: `El assetStatus ${id} no está registrado`
                })
            } else {
                res.status(500).json({
                    error: error.message
                })
            }
        })
}



module.exports = {
    assetStatusGet,
    assetStatusGetbyId,
}