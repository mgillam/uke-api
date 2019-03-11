const RouteSet = require('../../src/router/RouteSet');
const { spy } = require('sinon');

describe('#RouteSet', function() {
  it('should be a Function', function() {
    RouteSet.should.be.a('Function');
  });

  it('should have no routes when instantiated', function() {
    let routeSet = new RouteSet();
    routeSet.routes.length.should.equal(0);
  });

  it('should support the four basic http methods, and correctly set them', function() {
    let routeSet = new RouteSet();
    let f = () => {};
    routeSet.post('/foo', f);
    routeSet.put('/foo', f);
    routeSet.delete('/foo', f);
    routeSet.get('/foo', f);
    routeSet.routes.length.should.equal(4);
    routeSet.routes[0].method.should.equal('post');
    routeSet.routes[1].method.should.equal('put');
    routeSet.routes[2].method.should.equal('delete');
    routeSet.routes[3].method.should.equal('get');
  });

  it('should receive a single function as a splat', function() {
    let routeSet = new RouteSet();
    let f = () => {};
    routeSet.delete('/', f);
    routeSet.routes[0].func.should.be.an('array');
  });

  it('should receive multiple functions as a splat', function() {
    let routeSet = new RouteSet();
    let f1 = () => {};
    let f2 = () => {};
    let f3 = () => {};
    routeSet.put('/foo', f1, f2, f3);
    routeSet.routes[0].func.should.be.an('array');
  });

  it('should pass a multi-function route to the app as separate args', function() {
    let appSpy = {
      post: spy(),
      get: spy(),
      put: spy(),
      delete: spy()
    };
    let routeSet = new RouteSet();
    let f1 = () => {};
    let f2 = () => {};
    routeSet.post('/foo', f1, f2);
    routeSet.addToRestify(appSpy);
    appSpy.post.called.should.equal(true);
    appSpy.post.getCall(0).args[0].should.equal('/foo');
    appSpy.post.getCall(0).args[1].should.equal(f1);
    appSpy.post.getCall(0).args[2].should.equal(f2);
  });
});
