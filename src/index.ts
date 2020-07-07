import http from 'http';
import app from './app';

const server = http.createServer(app);
const PORT = process.env.PORT || 3400;

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

export default server;
