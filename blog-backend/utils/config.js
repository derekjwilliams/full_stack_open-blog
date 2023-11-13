require('dotenv').config()

const PORT = process.env.PORT || 3001

const MONGODB_URI = process.env.MONGODB_URI_PREFIX + process.env.MONGODB_PASSWORD + process.env.MONGODB_URI_SUFFIX
const MONGODB_URI_HIDE_PASSWORD = process.env.MONGODB_URI_PREFIX + '[SECRET]' + process.env.MONGODB_URI_SUFFIX // use if logging connection

module.exports = {
  MONGODB_URI,
  MONGODB_URI_HIDE_PASSWORD,
  PORT
}