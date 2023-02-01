const { response } = require('express')
const axios = require('axios')
const control_errores = require('../helpers/control_errores')




const organizationsPatch = (req, res = response) => {
    const url = `https://${process.env.USER}:${process.env.PASSWORD}@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/organizations`;

    const { id } = req.params;
    const parts = req.url.split('/');
    axios
        .patch(`${url}/${id}`, {
            "name": req.body.name
        })
        .then((result) => {
            res.status(200).json({
                msg: `Organización ${id} actualizada`
            })
        })
        .catch((error) => {
            control_errores(error, res, req, id, parts);
        })
}


module.exports = {
    organizationsPatch,
}