module.exports = class {
  constructor() {
    this.routes = [];
  }

  makeRoute(method, path, ...func) {
    return {
      method: method,
      path: path,
      func: func
    };
  }

  get(path, ...func) {
    this.routes.push(this.makeRoute('get', path, ...func));
  }

  post(path, ...func) {
    this.routes.push(this.makeRoute('post', path, ...func));
  }

  put(path, ...func) {
    this.routes.push(this.makeRoute('put', path, ...func));
  }

  delete(path, ...func) {
    this.routes.push(this.makeRoute('delete', path, func));
  }

  addToRestify(app, path = '') {
    this.routes.forEach(route => {
      app[route.method](path + route.path, ...route.func);
    });
  }
};
