const Slider = require("../models/slider");

const getSlider = async(req,res) => {
    try{
        const sliders = await Slider.find();
        res.status(200).json(sliders);
    }catch{
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getSlider,
};