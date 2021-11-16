const http = require('http')
const url=require('url')
// console.log('I am trying to print http object')
// console.log(http)
// const url=require('url')
// const homeApi=function(request, response){
//     console.log("hey i am home API")
    // response.write("hey i am shubham and I am working at wipro")
    // response.end()
// }
const homeApi=function(request, response){
 
   if(request.method=='GET'){
    response.write("Hey i AM GET request")
    response.end()
   }
   if(request.method=='POST'){
    response.write("Hey i AM POST request")
    response.end()
   }
   if(request.method=='DELETE'){
    response.write("Hey i AM DELETE request")
    response.end()
   }
   if(request.method=='PUT'){
    response.write("Hey i AM PUT request")
    response.end()
   }
   if(request.method=='PATCH'){
    response.write("Hey i AM PATCH request")
    response.end()
   }
}
const server=http.createServer(homeApi) //http://localhost:8080/
server.listen(8080)  