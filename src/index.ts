// If an object is extracted directly from rxjs it means that it is something to create Observables.
import { Observable, Observer } from 'rxjs';

//const obs$ = Observable.create(); INFO: Deprecate

const observer: Observer<any> = {
    next: value => console.log('[next]: ', value),
    error: error => console.error('[error]: ', error),
    complete: () => console.info('[completed]')
};

const obs$ = new Observable<string>(subs => {
    subs.next('Hello');
    subs.next('World');

    subs.next('Hello');
    subs.next('World');

    // Force error
    const a = undefined;
    a.name = 'Test';

    subs.complete();

    subs.next('Hello');
    subs.next('World');
});

//obs$.subscribe(resp => console.log(resp));

obs$.subscribe(observer);