const Men = require('../models/Men')

const getMen = async(req,res) =>{
    try {
        const product = await Men.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

const createMen = async(req,res) =>{
    try {
        const product = await Men.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteMen = async(req,res) =>{
    try {
        const {id} = req.params
        const product = await Men.findByIdAndDelete(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {getMen,createMen,deleteMen}