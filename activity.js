const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === '/') {
        res.end('Welcome to Our Page.');
    } else if (req.url === '/login') {
        res.end('Welcome to the Login Page. Please log in your credentials.');
    } else if (req.url === '/register') {
        res.end('Welcome to the Register Page. Please register your details.');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Resource not found.');
    }
});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});
