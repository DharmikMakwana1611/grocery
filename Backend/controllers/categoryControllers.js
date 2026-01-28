const Category = require("../models/category");

const getCategory = async(req,res) => {
    try{
        const category = await Category.find();
        res.status(200).json(category);
    }catch{
        res.status(500).json({ message: error.message});
    }
};

module.exports = {
    getCategory,
}
