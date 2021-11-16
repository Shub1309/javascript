    const http = require('http')
module.export=http.createserver(request, response){
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
export default home 