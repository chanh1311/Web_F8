
const mongoose = require('mongoose');


async function connect(){
    try {
        await mongoose.connect('mongodb+srv://Chanhdev:INUpZfVIkXpRxvrK@cluster0.jxhfj.mongodb.net/Database_f8?retryWrites=true&w=majority');
    } catch (error) {
        console.log("Connect faild!!!!");
    }
    console.log("Connect Sucessfully!!!!");
}


module.exports = {connect}