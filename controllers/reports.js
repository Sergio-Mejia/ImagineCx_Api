const { response } = require('express')
const axios = require('axios')

const url = `https://${process.env.USER}:${process.env.PASSWORD}@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/analyticsReports`;


const reportGetbyId = (req, res = response) => {

    const { id } = req.params;
    axios
        .get(`${url}/${id}`)
        .then((result) => {
            res.status(200).json({
                id: result.data.id,
                name: result.data.lookupName,
                createdTime: result.data.createdTime,
                updatedTime: result.data.updatedTime,
                link: result.data.links[1]
            })
        })
        .catch((error) => {
            if (error.response.status === 404) {
                res.status(404).json({
                    error: `La reporte de analisis ${id} no está registrado`
                })
            } else {
                res.status(500).json({
                    error: error.message
                })
            }
        })
}



module.exports = {
    reportGetbyId,
}