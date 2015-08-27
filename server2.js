var http = require("http");

function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");

// node 该js时，会马上在命令行上输出“Server has started.”。当我们向服务器发出请求（在浏览器访问http://localhost:8888/ ），“Request received.”这条消息就会在命令行中出现。

// 这就是事件驱动的异步服务器端JavaScript和它的回调

// 可能会输出两次“Request received.”。那是因为大部分服务器都会在你访问http://localhost:8888 /时尝试读取 http://localhost:8888/favicon.ico

// 当回调启动，我们的 onRequest() 函数被触发的时候，有两个参数被传入： request 和 response，它们是2个对象。用它们的方法来处理HTTP请求的细节(request)，并且响应请求（比如向发出请求的浏览器发回一些东西response，）。

