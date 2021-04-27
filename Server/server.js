const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const users = require()

const app = express();
const PORT =process.env.PORT|| 3000;

app.use(cors());
app.use(express.json({extends: false})); 
app.use(express.urlencoded({ extended: true }))


const URI= (process.env.MONGODB_URI ||``)
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("database connect")
});



app.use('', users)


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));