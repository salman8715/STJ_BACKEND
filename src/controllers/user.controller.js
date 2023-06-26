const User = require('../models/user.models');
const encryptType = require('sha256');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

async function comparePasswords(password, hashedPassword) {
	// first, hash the password using sha256
	const hashedInputPassword = encryptType(password);

	// then, compare the hashed password with the hashed input password using bcrypt
	return await bcrypt.compare(hashedInputPassword, hashedPassword);
}
const login = async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({ where: { username } });

		// console.log(password);

		if (!user) {
			return res.status(404).json({ error: 'User not found.' });
		}
		const passwordHash = crypto.createHash('sha256').update(password).digest().toString('hex');
		
		if (passwordHash !== user.new_password) {
			return res.status(401).send('Invalid username or password.');
		}
		
		const accessToken = jwt.sign({ id: user.id }, '^token*secret', {
			expiresIn: '1800s'
		});
		const refreshToken = jwt.sign({ id: user.id }, '^token*secret', {
			expiresIn: '1800s'
		});

		res.status(200).json({
			message: 'Login successful!',
			username: user.username,
			// email: user.email,
			accessToken,
			refreshToken
		});

	
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Error logging in.' });
	}
};
module.exports = {
	login
};
