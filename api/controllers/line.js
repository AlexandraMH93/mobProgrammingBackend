const Line = require('../models/line')

const createLine = async (req, res) => {
    try {
        const lines = await Line.findAll({ paranoid: false })
        if (lines) {
            return res.status(200).json(lines)
        } else {
            return res.status(404).send('No lines found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = createLine