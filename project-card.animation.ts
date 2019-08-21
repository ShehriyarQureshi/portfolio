import { state, transition, animate, trigger, style } from '@angular/animations';

export let slideInLeft = trigger('slideInLeft', [
    state('void', style({ opacity: 0, marginRight: '30%' })),
    state('*', style({ opacity: 1, marginRight: '0%' })),
    transition(':enter', [
        animate('0.5s')
    ])
]);

export let slideInRight = trigger('slideInRight', [
    state('void', style({ opacity: 0, marginLeft: '55%' })),
    state('*', style({ opacity: 1, marginLeft: '45.5%' })),
    transition(':enter, :leave', [
        animate('0.5s')
    ])
]);

export let hrExtend = trigger('hrExtend', [
    state('void', style({ opacity: 0, width: '0%' })),
    state('*', style({ opacity: 1, width: '15em' })),
    transition(':enter, :leave', [
        animate('0.5s')
    ])
]);