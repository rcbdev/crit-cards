import React from 'react';
import Effect from './Effect';

export default function EffectList({effects}){
    return (
        <div>
            {effects.map(e => (<Effect key={e.id} effect={e} />))}
        </div>
    );
}
