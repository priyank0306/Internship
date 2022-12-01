const Customer = require("../models/Customer.js");
const getCustomerByAge = async (req, res) => {
  try {
    const minAge = req.query.minAge;
    const maxAge = req.query.maxAge;
    console.log(req.query);
    const customers = await Customer.find({
      age: { $gte: minAge, $lte: maxAge },
    });
    res.status(200).json({ customers });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().sort({ age: 1 });
    res.status(200).json({ customers });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const addCustomer = async (req, res) => {
  try {
    const temp = await Customer.find({ phone: req.body.phone });
    console.log(temp.length);
    if (temp.length === 0) {
      const customer = await Customer.create(req.body);
      console.log(req.body);
      res.status(201).json({ customer });
    } else {
      res.status(200).send(" Record Already Present");
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOneAndUpdate(
      { phone: req.body.phone },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!customer) {
      return res.status(404).json({ msg: `Nothing to update` });
    }
    res.status(200).json({ customer });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
module.exports = {
  addCustomer,
  getAllCustomers,
  updateCustomer,
  getCustomerByAge,
};
