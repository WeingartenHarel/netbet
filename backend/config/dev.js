module.exports = {
  //"dbURL": "mongodb://localhost:27017"
  "dbURL": `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASS}@cluster0.sxgml.mongodb.net/${process.env.DB}?retryWrites=true`,
}
console.log('process.env.USER_ID',process.env.DB_NAME)