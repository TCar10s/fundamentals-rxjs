 // Si algo proviene de la librería rxjs, significa que se usa para  crear observables.
import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('[next]: ', value),
  error: (error) => console.error('[error]: ', error),
  complete: () => console.info('[completed]'),
};

const interval$ = new Observable<number>((subscriber) => {
  // Emit random number
  const intervalId = setInterval(() => {
    subscriber.next(Math.random());
  }, 1000);

  // Return que se ejecutara cuando se realice el unsubscribe
  return () => {
    clearInterval(intervalId);
    console.log('Interval destroyed for unsubscribe');
  }
});

/*
  Caracteristicas de un subject:
* 1- Casteo múltiple
* 2- También es un observer
* 3- Next, error, complete
*/

const subject$ = new Subject(); // El subjet es un tipo especial de observable
const subscription = interval$.subscribe(subject$);


//const sub1 = interval$.subscribe( rnd => console.log('Sub 1: ', rnd) );
//const sub2 = interval$.subscribe( rnd => console.log('Sub 2: ', rnd) );

const sub1 = subject$.subscribe( observer );
const sub2 = subject$.subscribe( observer );

setTimeout(() => {
  
  subject$.next(10);
  subject$.complete();

  subscription.unsubscribe();

}, 3500);