const helpPage = require('../../src/help-page');
const { spy } = require('sinon');

describe('#help-page', function() {
  it('should set content-type to html', function() {
    const res = {
      header: spy((key, val) => {}),
      sendRaw: () => {}
    };
    helpPage({}, res, () => {});
    res.header.called.should.be.true;
    res.header.getCall(0).args[0].should.equal('content-type');
    res.header.getCall(0).args[1].should.equal('text/html');
  });

  it('should call the *next* function', function() {
    const next = spy();
    const res = {
      header: () => {},
      sendRaw: () => {}
    };
    helpPage({}, res, next);
    next.called.should.be.true;
  });
});
