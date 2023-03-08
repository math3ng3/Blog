const express = require('express')
const { getBlogs, deleteBlog, updateBlog, createBlog, getBlog } = require('./controllers/controllers')
const app = express()
app.use(express.json())

app.get('/blogs', getBlogs)
app.get('/blogs/:id',getBlog)
app.post('/blogs', createBlog)
app.put('/blogs/:id', updateBlog)
app.delete('/blogs/:id', deleteBlog)

app.listen(4000, ()=>{
	console.log('Server up and Running very very bad')
})