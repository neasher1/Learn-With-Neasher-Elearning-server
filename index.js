const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

const allCourses = require('./courseData/courseData.json')

app.get('/',(req ,res)=>{
    res.send(allCourses);
})




app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})