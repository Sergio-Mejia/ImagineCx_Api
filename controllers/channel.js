const { response } = require('express')
const axios = require('axios')
const control_errores = require('../helpers/control_errores')

const url = `https://${process.env.USER}:${process.env.PASSWORD}@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/channelTypes`;


const channelTypesGet = async (req, res = response) => {
    try {
        const result = await axios.get(url)
        res.status(200).json({
            channelTypes: result.data.items
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const channelTypesGetbyId = async(req, res = response) => {

    const { id } = req.params;
    const parts = req.url.split('/');

    try {
        const result = await axios.get(`${url}/${id}`)
        res.status(200).json({
            tipo_Canal: {
                id: result.data.id,
                name: result.data.lookupName,
            }
        })
    } catch (error) {
        control_errores(error, res, req, id, parts);
    }
}



module.exports = {
    channelTypesGet,
    channelTypesGetbyId,
}