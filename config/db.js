const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString,{
    // Activating both unifiedTopology & url parser
    useUnifiedTopology:true,
    useNewUrlParser:true
    // promise is returning; that's why we use .then & .catch
}).then((data)=>{
    console.log('@ @ @ Mongo db Atlas connected to shopServer server');
}).catch((err)=>{
    console.log('Mongo db connection failed');
})