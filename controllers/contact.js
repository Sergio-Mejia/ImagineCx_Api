const { response } = require( 'express' )
const axios = require('axios')

const url = 'https://ICXCandidate:Welcome2022@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/contacts';

const contactGet = (req, res = response) => {

    const { id } = req.params;
    axios
        .get( `${url}/${id}` )
        .then(( result ) => {
            res.json({
                    id : result.data.id,
                    name : result.data.lookupName,
                    direction : {
                        city : result.data.address.city,
                        address : result.data.address.street   
                    },
                    work : result.data.source.lookupName
                })
        })
        .catch( e => console.log(e))
}



const contactPut = (req, res = response ) => {

    const {id} = req.params;
    res.status(400).json({
        msg: "Put Controlador",
        id
    })
}

const contactDelete = (req, res = response) => {
    const { id } = req.params;
    axios
        .delete( `${url}/${id}`)
        .then(( result ) => {
            res.json({
                msg: `User ${id} deleted`
            })
        })
        .catch( e => console.log( e ))

}


module.exports = {
    contactGet,
    contactPut,
    contactDelete
}