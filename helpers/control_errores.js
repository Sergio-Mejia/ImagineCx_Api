const { response } = require('express')

const control_errores = (error, res = response, req, id, name) => {
    if (error.response.status === 404) {
        res.status(404).json({
            error: `${name[1]} ${id} no está registrado`
        })
    } else {
        res.status(500).json({
            error: error.message
        })
    }
}
 

module.exports = control_errores