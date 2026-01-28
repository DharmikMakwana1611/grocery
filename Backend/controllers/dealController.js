import Deal from "../models/deal.js";

export const getDeal = async (req, res) => {
  try {
    const deal = await Deal.find();
    res.status(200).json(deal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
