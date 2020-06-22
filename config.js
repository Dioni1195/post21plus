module.exports = {
    secretKey : process.env.SECRET_KEY || "DioniClaveSecreta",
    port : process.env.PORT || 5000,
    aws_access_key: process.env.AWS_ACCESS_KEY,
    aws_secret_key: process.env.AWS_SECRET_KEY 
}