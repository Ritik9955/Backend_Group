require("dotenv").config();
// require('dotenv').config({path: '.env'})
const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors');
const Application = require("./models/Application");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
mongoose.connect(process.env.MONGO);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/JobsForm", require("./route/JobsFormRoute"));
app.use("/api/Project", require("./route/ProjectRoute"));
app.use("/api/Appointment", require("./route/AppointmentRoute"));
app.use("/api/Contact", require("./route/ContactRoute"));


app.use("/api/user", require("./routes/userRoute"));
app.use("/api/client", require("./routes/ClientRoute"));
app.use("/api/lead", require("./routes/LeadRoute"));
app.use("/api/Invoice", require("./routes/invoiceRoute"));
app.use("/api/quotations", require("./routes/quotationsRoute"));
app.use("/api/proforma_invoices", require("./routes/proforma_invoicesRoute"));
app.get("/applications", function (req, res) {
  Application.find()
    .then((response) => {
      console.log(response);
      // const csv = json2csv.parse(response);

      return res.send(response);
    })
    .catch((error) => res.sendStatus(501));
});

app.use("submit", require("./routes/ApplicationRoute"));
app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT} port`);
});
