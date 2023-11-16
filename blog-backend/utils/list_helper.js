const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((total, blog) => {
    return total + blog.likes
  }, 0)
}

const favoriteBlog = (blogs) => {
  const result = blogs.reduce((prev, curr) => {
    return prev?.likes > curr.likes ? prev : curr
  }, null)

  debugger;

  return result;

  // return blogs.reduce((total, blog) => {
  //   return total + blog.likes
  // }, 0)
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}
