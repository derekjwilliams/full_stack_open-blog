const mongoose = require('mongoose')

// if (process.argv.length<3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

// const password = process.argv[2]

const url =
`mongodb://127.0.0.1:27017/bloglist`
  // `mongodb+srv://fullstackopenmongo:${password}@freestackopencluster.dhyth5u.mongodb.net/noteApp?retryWrites=true&w=majority`
//  `mongodb+srv://fullstackopenmongo:${password}@freestackopencluster.dhyth5u.mongodb.net/noteApp?retryWrites=true&w=majority`

  ///mongodb+srv://<username>:<password>@freestackopencluster.dhyth5u.mongodb.net/?retryWrites=true&w=majority


  
mongoose.set('strictQuery',false)
mongoose.connect(url)

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

Blog.find({}).then(result => {
  result.forEach(blog => {
    console.log(blog)
  })
  mongoose.connection.close()
})

const blog = new Blog({
  title: 'FullStackOpen Part 4',
  author: 'Derek',
  url: 'http://localhost/blog/part4',
  likes: 0
})

blog.save().then(result => {
  console.log('blog entry saved!')
  mongoose.connection.close()
})