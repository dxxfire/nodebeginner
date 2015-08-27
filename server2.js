var http = require("http");

function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");

// node ��jsʱ�����������������������Server has started.������������������������������������http://localhost:8888/ ������Request received.��������Ϣ�ͻ����������г��֡�

// ������¼��������첽��������JavaScript�����Ļص�

// ���ܻ�������Ρ�Request received.����������Ϊ�󲿷ַ����������������http://localhost:8888 /ʱ���Զ�ȡ http://localhost:8888/favicon.ico

// ���ص����������ǵ� onRequest() ������������ʱ�����������������룺 request �� response��������2�����������ǵķ���������HTTP�����ϸ��(request)��������Ӧ���󣨱����򷢳���������������һЩ����response������

