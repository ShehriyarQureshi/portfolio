import { state, transition, animate, trigger, style, keyframes } from '@angular/animations';

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

export let fullHeight = trigger('fullHeight', [
    state('void', style({ opacity: 1 })),
    state('*', style({ opacity: 1, clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 0 100%, 0 0%)', backgroundColor: '#673AB7' })),
    transition(':enter, :leave', [
        animate('0.5s', keyframes([
            style({ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 0 100%, 0 0%)', backgroundColor: '#673AB7' }),
        ]))
    ])
]);
