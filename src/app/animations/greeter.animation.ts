import { state, transition, animate, trigger, style } from '@angular/animations';

export let slideInLeft = trigger('slideInLeft', [
    state('void', style({ opacity: 0, marginRight: '30%', fontSize: '2em' })),
    // state('*', style({})),
    transition(':enter, :leave', [
        animate('1s')
    ])
]);

export let slideInRight = trigger('slideInRight', [
    state('void', style({ opacity: 0, marginLeft: '30%' })),
    state('*', style({ opacity: 1, marginLeft: '0' })),
    transition(':enter, :leave', [
        animate('1s')
    ])
]);

export let test = trigger('test', [
    state('void', style({ opacity: 0, marginLeft: '30%' })),
    state('*', style({ opacity: 1, marginLeft: '0%' })),
    transition(':enter, :leave', [
        animate('1s')
    ])
]);
