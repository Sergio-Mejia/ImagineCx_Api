const { response } = require('express')
const axios = require('axios')

const url = `https://${process.env.USER}:${process.env.PASSWORD}@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/contacts`;


const contactGet = (req, res = response) => {
    axios
        .get(url)
        .then((result) => {
            res.json({ 
                contacts: result.data.items
            })
        })
        .catch(error => console.log(error)) 
}



const contactGetbyId = (req, res = response) => {

    const { id } = req.params;
    axios
        .get(`${url}/${id}`)
        .then((result) => {
            res.json({
                id: result.data.id,
                name: result.data.lookupName,
                createdTime: result.data.createdTime,
                updatedTime: result.data.updatedTime,
                city: result.data.address.city,
                address: result.data.address.street,
                work: result.data.source.lookupName
            })
        })
        .catch((e) => {
            console.log(e)
            res.json({
                res: `El id ${id} no se encuentra registrado`
            })  
        })
}



const contactPatch = (req, res = response) => {

    const { id } = req.params;
    const { city, postalCode, street } = req.body.address;
    axios
        .patch(`${url}/${id}`, {
            "address": {
                "city": city,
                "postalCode": postalCode,
                "street": street
            }
        })
        .then((result) => {
            res.json({
                msg: `Usuario ${id} actualizado`
            })
        })
        .catch(error => console.log(error))

}

const contactDelete = (req, res = response) => {
    const { id } = req.params;
    axios
        .delete(`${url}/${id}`)
        .then((result) => {
            res.status(200).json({
                msg: `User ${id} deleted`,
                lista : result.data
            })
        })
        .catch(e => console.log(e))

}


module.exports = {
    contactGet,
    contactGetbyId,
    contactPatch,
    contactDelete
}