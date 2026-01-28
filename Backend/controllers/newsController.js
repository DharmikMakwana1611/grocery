const News = require("../models/news");

const getNews = async(req, res) => {
    try{
        const news = await News.find();
        res.status(200).json(news);
    }catch{
        res.status(500).json({ message: error.message});
    }
}

module.exports = {
    getNews,
}