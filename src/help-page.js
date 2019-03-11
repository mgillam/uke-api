module.exports = (req, res, next) => {
  res.header('content-type', 'text/html');
  res.sendRaw(
    '<html>\
    <head>\
    <title>Help with UkeAPI</title>\
    </head>\
    <body>\
    <marquee><h1>Hello World</h1></marquee>\
  </html>'
  );
  return next();
};
