const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

// get all category 
const allcategory = require('./courseData/courseCategory.json');
app.get('/category',(req,res)=>{
    res.send(allcategory);
})


// get all course
const allCourses = require('./courseData/courseData.json');
app.get('/',(req ,res)=>{
    res.send(allCourses);
})

// get course by course_category

app.get('/courses/:category',(req,res)=>{
    const categoryName = req.params.category;
    console.log(categoryName);
    const fillterdCourse = allCourses.filter(course=>course.course_category === categoryName);
    res.send(fillterdCourse);
});

// get course by unique id 

app.get('/course/:id',(req,res)=>{
    const getedId = req.params.id;
    console.log(getedId)
    const findCourses = allCourses.find(course => course.id == getedId);
    res.send(findCourses);
})


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})