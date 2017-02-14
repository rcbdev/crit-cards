import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Effect from './Effect';

export default function EffectList({effects}){
    return (
        <div>
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {effects.map(e => (<div key={e.id}><Effect effect={e} /></div>))}
            </ReactCSSTransitionGroup>
        </div>
    );
}
