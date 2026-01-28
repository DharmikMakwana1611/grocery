const Deal = require("../models/deal");

const getDeal = async(req, res) => {
    try{
        const deal = await Deal.find();
        res.status(200).json(deal);
    }catch{
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getDeal,
}