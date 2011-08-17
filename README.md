# connect-app-cache

  Simple middleware for [connect](http://senchalabs.github.com/connect) that allows to use HTML5 application cache.

## Usage

Install via NPM:

    $ npm install connect-app-cache

Use it in your code:

    $ var appCache = require('connect-app-cache');

Include into connect application:

    $ connect.createServer(connectAppCache.appCache());


Include into express application:

    $   ...
        var app = express.createServer();
        app.configure(function(){
            ...
            app.use(appCache("app.mf",__dirname+"/app.mf"));
        });

appCache has following parameters:

 - fileName - name of the manifest file which you will use in html: <html manifest="app.mf">... Default is app.mf
 - filePath - path to the manifest file on the filesystem. Default is __dirname+"/public/app.mf"
 - options  - som extra options. You can specify maxAge for caching this file. Default is 1 hour.


## License

(The MIT License)

Copyright (c) 2011 Enginimation Studio (http://enginimation.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.