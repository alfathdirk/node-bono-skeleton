const Bundle = require('bono');

class Api extends Bundle {
  constructor() {
    super();
    this.get('/', this.index.bind(this));
  }

  index(ctx) {
    return ctx.state.user;
  }
}

module.exports = new Api();
