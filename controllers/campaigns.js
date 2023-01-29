const { response } = require('express')
const axios = require('axios')

const url = `https://${process.env.USER}:${process.env.PASSWORD}@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/campaigns`;


const campaignsGet = (req, res = response) => {
    axios
        .get(url)
        .then((result) => {
            res.status(200).json({
                campaigns: result.data.items
            })
        })
        .catch((error) => {
            res.status(500).json({
                error: error.message
            })
        })
}

const campaignsGetbyId = (req, res = response) => {

    const { id } = req.params;
    axios
        .get(`${url}/${id}`)
        .then((result) => {
            res.status(200).json({
                campaigns: {
                    id: result.data.id,
                    name: result.data.lookupName,
                    eventoCreado: result.data.createdTime
                }
            })
        })
        .catch((error) => {
            if (error.response.status === 404) {
                res.status(404).json({
                    error: `La campaña ${id} no está registrada`
                })
            } else {
                res.status(500).json({
                    error: error.message
                })
            }
        })
}



module.exports = {
    campaignsGet,
    campaignsGetbyId,
}