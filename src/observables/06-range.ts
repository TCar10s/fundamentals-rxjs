import { asyncScheduler, range, subscribeOn } from 'rxjs';

// const src$ = range(1, 10);
const src$ = range(1, 10).pipe(subscribeOn(asyncScheduler));

console.log('start');

src$.subscribe({
  next: (v) => console.log(v),
});

console.log('end');