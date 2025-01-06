// Subject
class Publisher {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(data) {
    for (const observer of this.observers) {
      observer.update(data);
    }
  }

  // Other methods and logic...
}

// Observer
class Observer {
  update(data) {
    // Handle the update
    console.log('Received update:', data);
  }
}

// Usage
const publisher = new Publisher();
const observer = new Observer();

publisher.addObserver(observer);

// When the state changes
const newData = 'Some new data';
publisher.notifyObservers(newData);
