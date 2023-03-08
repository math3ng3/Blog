const express = require('express') //npm install express
const app = express()
const { getBlogs, deleteBlog, updateBlog, createBlog, getBlog } = require('./controllers/controllers')


app.use(express.json())

app.get('/blogs', getBlogs)
app.get('/blogs/:id',getBlog)
app.post('/blogs', createBlog)
app.put('/blogs/:id', updateBlog)
app.delete('/blogs/:id', deleteBlog)

app.listen(4000, ()=>{
	console.log('Server up and Running very very bad')
})