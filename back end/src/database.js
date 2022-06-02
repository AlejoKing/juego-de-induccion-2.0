import mongoose from 'mongoose'


mongoose.connect("mongodb+srv://root:admin123@it-seekers.q8lvn.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
})
    .then(db => console.log('Db is connected'))
    .catch(error=> console.log(error))