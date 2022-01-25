import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('[next]: ', value),
  error: (error) => console.error('[error]: ', error),
  complete: () => console.info('[completed]'),
};

const interval$ = new Observable<number>((subscriber) => {
  let count = 0;

  const interval = setInterval(() => {
    subscriber.next(count++);
    console.log({ count });
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log('Interval destroyed for unsubscribe');
  };
});

const subscription = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

subscription.add(subscription2);
subscription.add(subscription3);

setTimeout(() => {
  subscription.unsubscribe();
  subscription2.unsubscribe();
  subscription3.unsubscribe();

  console.log('completed timeout 3 seconds');
}, 3000);
