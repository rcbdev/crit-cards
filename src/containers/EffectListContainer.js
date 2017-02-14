import {EffectList} from '../components';
import {connect} from 'react-redux';

const EffectListContainer = connect(
    (state) => ({effects: [...state.effectHistory].reverse()}),
    {}
)(EffectList);

export default EffectListContainer;
