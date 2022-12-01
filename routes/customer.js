const express = require("express");
const router = express.Router();
const {
  getAllCustomers,
  addCustomer,
  updateCustomer,
  getCustomerByAge,

} = require("../controllers/customer");

router.route("/").get(getAllCustomers).post(addCustomer);
router.route("/:id").patch(updateCustomer)
router.route("/age").get(getCustomerByAge);
module.exports = router;
