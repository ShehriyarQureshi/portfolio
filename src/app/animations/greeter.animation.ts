import { state, transition, animate, trigger, style } from '@angular/animations';

export let slideInLeft = trigger('slideInLeft', [
    state('void', style({ opacity: 0, marginRight: '30%', fontSize: '1em' })),
    state('*', style({})),
    transition('void => *, * => void', [
        animate('0.7s ease-out')
    ])
]);

export let slideInRight = trigger('slideInRight', [
    state('void', style({ opacity: 0, marginLeft: '30%' })),
    state('*', style({ opacity: 1, marginLeft: '0' })),
    transition(':enter, :leave', [
        animate('0.7s ease-out')
    ])
]);

export let slideInDown = trigger('slideInDown', [
    state('void', style({ opacity: 1, marginTop: '100%' })),
    state('*', style({ opacity: 1 })),
    transition(':enter, :leave', [
        animate('500ms ease-out')
    ])
]);

export let fadeIn = trigger('fadeIn', [
    state('void', style({ opacity: 0 })),
    state('*', style({ opacity: 1 })),
    transition(':enter, :leave', [
        animate('1s ease-out')
    ])
]);
