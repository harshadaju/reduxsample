var http=require('http')

const server=http.createServer((req,res)=>{
    res.end('Hello World')
});

server.listen(3000,()=>{
    console.log('server is listening at port no 3000')
})