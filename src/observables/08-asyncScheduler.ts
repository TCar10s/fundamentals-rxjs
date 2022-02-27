import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 1000);
// setInterval(() => {}, 1000);

const greet = () => console.log('Hello world');
const greet2 = (name) => console.log(`Hello ${name}`);

// asyncScheduler.schedule(greet, 2000);
// asyncScheduler.schedule(greet2, 2000, 'Carlos');

const subs = asyncScheduler.schedule(function (state) {
  this.schedule(state + 1, 1000);
}, 3000, 0);

asyncScheduler.schedule( () => subs.unsubscribe(), 10000);