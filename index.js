const http = require('http');
const data = {
    firstName:'Tanisha',
    lastName:'verma',
    Age:22,
    Proffession:'software-Developer'

}
const server = http.createServer((req,res)=>{
    res.write('<h1>Details</h1>');
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(8000,()=>
console.log("server started...."));
