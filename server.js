// 引用http模块
var http = require("http");
// 调用http模块的createServer函数，返回一个对象，有一个listen的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。
// createSever() 的第一个参数是一个匿名函数。在JavaScript中，函数和其他变量一样都是可以被传递的。
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);

// Node.js是事件驱动的

// 我们创建了服务器，并且向创建它的方法传递了一个函数。无论何时我们的服务器收到一个请求，这个函数就会被调用。

// 我们不知道这件事情什么时候会发生，但是我们现在有了一个处理请求的地方：它就是我们传递过去的那个函数。至于它是被预先定义的函数还是匿名函数，就无关紧要了。

// 这个就是传说中的回调。我们给某个方法传递了一个函数，这个方法在有相应事件发生时调用这个函数来进行回调。