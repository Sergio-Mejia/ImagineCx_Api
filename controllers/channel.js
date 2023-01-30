const { response } = require('express')
const axios = require('axios')

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
    try {
        const result = await axios.get(`${url}/${id}`)
        res.status(200).json({
            tipo_Canal: {
                id: result.data.id,
                name: result.data.lookupName,
            }
        })
    } catch (error) {
        if (error.response.status === 404) {
            res.status(404).json({
                error: `El tipo de canal ${id} no está registrado`
            })
        } else {
            res.status(500).json({
                error: error.message
            })
        }
    }
}



module.exports = {
    channelTypesGet,
    channelTypesGetbyId,
}