import effects from '../../data/effects';
import cuid from 'cuid';

const CLEAR_HISTORY = 'CLEAR_HISTORY';
const ADD_EFFECT = 'ADD_EFFECT';

export default function reducer(state = [], action = {}) {
    switch (action.type) {
        case CLEAR_HISTORY:
            return [];
        case ADD_EFFECT:
            return [...state, action.effect];
        default:
            return state;
    }
}

const randomItem = (list) => list[Math.floor(Math.random()*list.length)];
const addId = (object) => Object.assign({}, object, {id: cuid()});

export const addEffect = (critMiss, attackType) => ({
    type: ADD_EFFECT,
    effect: addId(randomItem(effects[critMiss][attackType]))
});

export const clearHistory = () => ({
    type: CLEAR_HISTORY
});
