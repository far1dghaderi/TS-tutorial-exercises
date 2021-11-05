type Callback = () => void;
interface Event {
  key: string;
  callback: [Callback];
}

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };
  trigger = (eventName: string): void => {
    if (!this.events[eventName]) return;

    this.events[eventName].forEach((fn) => {
      fn();
    });
  };
}
