const { response } = require('express')
const axios = require('axios')
const control_errores = require('../helpers/control_errores')

const url = `https://${process.env.USER}:${process.env.PASSWORD}@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/contacts`;



const contactGetbyId = (req, res = response) => {

    const { id } = req.params;
    const parts = req.url.split('/');
    axios
        .get(`${url}/${id}`)
        .then((result) => {
            res.status(200).json({
                id: result.data.id,
                name: result.data.lookupName,
                createdTime: result.data.createdTime,
                updatedTime: result.data.updatedTime,
                city: result.data.address.city,
                address: result.data.address.street,
                work: result.data.source.lookupName
            })
        })
        .catch((error) => {
            control_errores(error, res, req, id, parts);
        })
}



const contactPatch = (req, res = response) => {

    const { id } = req.params;
    const { city, postalCode, street } = req.body.address;
    const parts = req.url.split('/');
    axios
        .patch(`${url}/${id}`, {
            "address": {
                "city": city,
                "postalCode": postalCode,
                "street": street
            }
        })
        .then((result) => {
            res.status(200).json({
                msg: `Usuario ${id} actualizado`
            })
        })
        .catch((error) => {
            control_errores(error, res, req, id, parts);
        })
}


module.exports = {
    contactGetbyId,
    contactPatch,
}