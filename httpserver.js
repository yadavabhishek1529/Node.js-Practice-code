const http = require('http')

const port = process.env.PORT;

const server = http.createServer((req, res)=> {
   console.log(req.url)
   res.statusCode = 200;
   res.setHeader('Content-Type','text/html')
   res.end(<h1>This is a Nodejs practice codes</h1>, <p>learning Nodejs with the help of code with harry nodejs tutorial.</p>);
})

server.listen(port, ()=>{
    console.log('Server is listening on port ${port}')
})