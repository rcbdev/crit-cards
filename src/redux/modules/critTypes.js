import effects from '../../data/effects';

const defaultState = {};

for(const critMiss of Object.keys(effects)){
    defaultState[critMiss] = [];
    for(const attackType of Object.keys(effects[critMiss])){
        defaultState[critMiss].push(attackType);
    }
}

export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        default:
            return state;
    }
}
