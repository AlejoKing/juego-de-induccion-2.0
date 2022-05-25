import mongoose from 'mongoose'


mongoose.connect("mongodb://localhost/it-seekers",{
    usenewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log('db is connected'))
    .catch(error=> console.log(error))