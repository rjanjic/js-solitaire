module.exports = {
    inject: {
        CDN_URL: 'http://localhost:3000/',
        CONTENT_SECURITY_POLICY: "script-src 'self' http://localhost:3000; object-src 'self'",
    }
};
