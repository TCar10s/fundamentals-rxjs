import { of } from 'rxjs';

// const obs$ = of<number>(1, 2, 3, 4, 5);
const obs$ = of<any>([1, 2], {}, () => {}, true, Promise.resolve(true));

obs$.subscribe({
  next: (val) => console.log('next', val),
  complete: () => console.log('complete'),
});
