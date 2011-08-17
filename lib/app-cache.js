/*!
 * connect - app-cache
 * Copyright(c) 2011 Enginimation Studio
 * MIT Licensed
 */

var fs = require('fs'),
    // Cached version of the app cache file
    appCacheFile;

module.exports=function appCache(fileName, filePath, options){
  var options = options  || {},
     fileName = fileName || 'app.mf',
     filePath = filePath || __dirname + '/../public/'+fileName,
     // max age. Default to one hour
     maxAge   = options.maxAge || 1000*60*60;
     console.log("enetered app_cached")
     return function appCache(req,res,next){
        console.log('req urk',req.url);
        if ('/'+fileName===req.url){
            console.log("1 branch",appCacheFile)
            if(appCacheFile){
                console.log("1.1 branch")
                res.writeHead(200,appCacheFile.headers);
                res.end(appCacheFile.body);
            }
            else{
                console.log("FIle path",filePath)
                fs.readFile(filePath,function(err,buf){
                    if(err) return next(err);
                    appCacheFile={
                        headers:{
                            'Content-Type'  : 'text/cache-manifest',
                            'Content-Length': buf.length,
                            'Cache-Control' : 'public, max-age=' + (maxAge / 1000) // do we need this caching?
                        },
                        body: buf
                    };
                    res.writeHead(200,appCacheFile.headers);
                    res.end(appCacheFile.body);
                });
            }
        }
        else{
            console.log("2 branch")
            next();
        }
     };
};
