class SandBoxWindow {
  constructor(context, frameWindow) {
    return new Proxy(frameWindow, {
      get(target, name) {
        if (name in context) {
          return context[name]
        }
        return target[name]
      },
      set(target, name, value) {
        if (name in context) {
          return (context[name] = value)
        }
        target[name] = value;
      }
    })
  }
}

export { SandBoxWindow as default };
