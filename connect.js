const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://omkhot511:omtest@cluster0.2tspb1m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("MongoDB Connected")
    }).catch(() => {
        console.log("MongoDB Not Connected")
    })