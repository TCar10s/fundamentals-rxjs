import { interval, timer } from 'rxjs';

const observer = {
  next: (v) => console.log('next:', v),
  complete: () => console.log('complete'),
};

const hoyEn5Segundos = new Date();
hoyEn5Segundos.setSeconds(hoyEn5Segundos.getSeconds() + 5);

const interval$ = interval(1000);
const timer$ = timer(hoyEn5Segundos);

console.log('start');

timer$.subscribe(observer);
// interval$.subscribe(observer);

console.log('end');
