const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://dhruvit:dhruvit@cluster0.tay13gr.mongodb.net/?retryWrites=true&w=majority';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
