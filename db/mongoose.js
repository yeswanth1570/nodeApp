const mongoose = require('mongoose');
const url = `mongodb+srv://admin123:admin123@training.xr6wcyd.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true 
}
var db; 
const conn = mongoose.connect(url,connectionParams)