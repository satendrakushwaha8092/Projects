const env = process.env.NODE_ENV || 'development';

const port = '6379';
let host;


if (env === 'development') {
    host = 'localhost'
}

module.exports = {
    PORT: port,
    HOST: host,
}
