import { interval, timer } from 'rxjs';

const observer = {
  next: (v) => console.log('next:', v),
  complete: () => console.log('complete'),
};

const interval$ = interval(1000);
const timer$ = timer(2000);

console.log('start');

timer$.subscribe(observer);
// interval$.subscribe(observer);

console.log('end');
