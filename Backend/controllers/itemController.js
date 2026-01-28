const Items = require("../models/item");

const getItems = async(req, res) => {
    try{
        const item = await Items.find();
        res.status(200).json(item);
    }catch{
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getItems
};