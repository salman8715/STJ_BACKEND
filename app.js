const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./src/models/db');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const https = require("https");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const schroute = require('./src/routes/stj_schedule.routes');
const driverroute = require('./src/routes/stj_driver.routes');

//app.use('/newvms/po', poRoute);
//app.use(cors('/newvms/user', userRoute));
//app.use('/newvms/supplier', supplierRoute);
app.use('/stj', schroute);
app.use('/stj', driverroute);

sequelize.sync().then(() => {
	app.listen(3200, () => {
		console.log('Server is running on port 3200');
	});
});
