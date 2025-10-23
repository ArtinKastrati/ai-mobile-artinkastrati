const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.server = {
  ...config.server,
  port: 8081,
  enhanceMiddleware: (middleware, metroServer) => {
    const connect = require('connect');
    
    return connect()
      .use((req, res, next) => {
        // Allow any host (proxy/iframe support for Replit)
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        
        // Allow iframe embedding (remove X-Frame-Options restriction)
        res.removeHeader('X-Frame-Options');
        
        next();
      })
      .use(middleware);
  },
};

module.exports = config;
