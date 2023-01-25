const { response } = require( 'express' )
const axios = require('axios')

const contactGet = (req, res = response) => {

    // const url = 'https://ICXCandidate:Welcome2022@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/contacts';
    axios
        .get('https://ICXCandidate:Welcome2022@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/contacts/45')
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



    
    // const { q, nombre = 'No name', apikey} = req.query
    // res.json({
    //     msg: "Get Controlador",
    //     q,
    //     nombre,
    //     apikey
    // })
}



const contactPut = (req, res = response ) => {

    const {id} = req.params;
    res.status(400).json({
        msg: "Put Controlador",
        id
    })
}

const contactDelete = (req, res = response) => {
    res.json({
        msg: "Delete Controlador"
    })
}


module.exports = {
    contactGet,
    contactPut,
    contactDelete
}