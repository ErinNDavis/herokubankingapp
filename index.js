
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require('./users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

const cors = require("cors");
app.use(cors());

const dbURI = "mongodb+srv://Erin:secret001@cluster0.pj6pv.mongodb.net/badbank?retryWrites=true&w=majority"
app.use(express.json());

mongoose.connect(dbURI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err)=>{console.error(err)});
db.once("open", () => {console.log("atlas DB started successfully")});

app.use(bodyParser.json())

//login------------------------------------------------------------------------------------
app.post('/api/login', async (req, res) => {
	const { email, password } = req.body
	const user = await User.findOne({ email }).lean()

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		
		const token = jwt.sign(
			{
				id: user._id,
				email: user.email
			},
			JWT_SECRET,
			{expiresIn: '24hr'}
		)
		return res.json({ status: 'ok', data: token, user: user })
	}
	
	res.json({ status: 'error', error: 'Invalid email/password' })
})

//create an account------------------------------------------------------------------

app.post('/api/signup', async (req, res) => {
	const { name, email, password: plainTextPassword, balance } = req.body
	const user = await User.findOne({ email }).lean()

	if (!user) {
		if (!email || typeof email !== 'string') {
		return res.json({ status: 'error', error: 'Invalid username' })
		}

		if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
		}

		if (plainTextPassword.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
		}
	}
  else {
		return res.json({ status: 'error', error: 'Email already in use' })
  }

	const password = await bcrypt.hash(plainTextPassword, 10)

	try {
		const response = await User.create({
			name,
      		email,
      		password,
      		balance
		})
		console.log('User created successfully: ', response)
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: 'error', error: 'Username already in use' })
		}
		throw error
	}

	res.json({ status: 'ok' })
})

app.use('/api/login', (req, res) => {
	res.send({token});
});

//delete account----------------------------------------------------------------

app.delete('/api/home', async (req, res) => {
  const { email } = req.body
  const doc = await User.findOneAndDelete({email})
  console.log('User account deleted: ', doc)
});

//change pwd-----------------------------------------------------------------

app.post('/api/changePwd', async (req, res) => {
	const { email, password: plainTextPassword } = req.body
	const password = await bcrypt.hash(plainTextPassword, 10)
	const doc = await User.findOneAndUpdate(
		{ email: email },
		{ password: password },
	);
	doc.password;
})

//deposit/withdraw----------------------------------------------------------

app.post('/api/deposit', async (req, res) => {
	const { email, status } = req.body
	const doc = await User.findOneAndUpdate(
		{ email: email },
		{ balance: status }
	);
	doc.balance;
})

app.post('/api/withdraw', async (req, res) => {
	const { email, status } = req.body
	const doc = await User.findOneAndUpdate(
		{ email: email },
		{ balance: status }
	);
	doc.balance;
})

//--------------------------------------------------------------------------------------

const port = process.env.PORT || 3001;

const path = require("path");

if(process.env.NODE_ENV === 'production'){
	app.use(express.static("client/build"));

	app.get("*", function (req, res) {
	res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

app.listen(port, function() {
    console.log("Server runnning on " + port);
  });

