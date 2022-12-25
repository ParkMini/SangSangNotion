
var app = http.createServer(function (request, response) {
  var _url = request.url;
  var pathname = url.parse(_url, true).pathname;
  if (pathname === '/') {
    response.writeHead(200);
    response.end(`
    <form action="http://sangsang.pah.kr/api/{{name}}/" method="post">
        이름 <input type="text" id="name" name="name">
        날짜 <input type="date" id="date" name="date">
        <br>
        내용 <input type="text" id="content" name="content">
        <br>
        <input type="submit" value="업로드" id="Post">
     </form>
      `);
  } else if (pathname === '/post_test') {
    var body = '';
    request.on('data', function (data) {
      body = body + data;
    });
    request.on('end', function () {
      var post = qs.parse(body);
      console.log(post);
      var name = post.name;
      var content = post.content;
      response.end(`
        <p>name : ${name}<p>
        <p>date : ${date}<p>
        <p>content : ${content}<p>
          `);
    });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);