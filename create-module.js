function createModule(config) {
  function createInstance(el, options_ = {}) {
    const state = {};

    const options = {};

    // Assign default options
    if(config.options && config.options instanceof Function) {
      Object.assign(options, config.options())
    } else {
      throw new Error('options must be a Function returning an object')
    }

    // Overwrite default options with given options_
    Object.assign(options, options_);

    return config.constructor({
      el,
      state,
      options
    });
  }

  return createInstance;
}

module.exports = createModule;
