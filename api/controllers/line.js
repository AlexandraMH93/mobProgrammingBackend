const Line = require('../models/line')

const createLine = async (req, res) => {
    try {
        const lines = await Line.create(req.body)
        return res.status(200).json(lines)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = createLine