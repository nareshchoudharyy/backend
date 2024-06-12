const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb+srv://naresh:dbNCatlas@cluster0.dt4ttg5.mongodb.net/database1_temp?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('database connected successfully'))
    .catch((err) => console.log(err))