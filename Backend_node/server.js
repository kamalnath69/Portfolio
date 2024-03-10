const express = require('express');
const mongoose = require('mongoose');
const Message = require('./schema');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('./Portfolio_files'));
app.use(express.json());


app.use(express.urlencoded({ extended: true }));

const uri = 'mongodb+srv://kamalnath123:2kx0jjefOTT0RCAX@portfolio.hbkryah.mongodb.net/Details?retryWrites=true&w=majority&appName=Portfolio';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.post('/submit-form', async (req, res) => {
  const { message } = req.body;

  try {
    const newMessage = new Message({ message });
    
    await newMessage.save();
    console.log('Form submitted successfully:', newMessage);
    res.status(200).send('Form submitted successfully');
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('Error submitting form');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
