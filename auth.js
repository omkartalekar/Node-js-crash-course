const register=function(username){
    console.log(`User ${username} has been registerd`);
}
const login=function(username,password){
    console.log(`User ${username} has logged in and password is ${password}`);
}
module.exports={
    register,
    login
}