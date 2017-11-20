class Dispatcher {
  constructor() {
    this.isDespatching = false;
    this.actionHandlers = [];
  }
  dispatch(action) {
    if (this.isDespatching) {
      throw new Error("Cannot despatch in the middle of a dispatch");
    }
    this.isDespatching = true;

    this.actionHandlers.forEach(handler => handler(action));

    this.isDespatching = false;
  }
  register(actionHandler) {
    this.actionHandlers.push(actionHandler);
  }
}

export default new Dispatcher();
