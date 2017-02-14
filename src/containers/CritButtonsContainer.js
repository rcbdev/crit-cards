import {CritButtons} from '../components';
import {connect} from 'react-redux';
import {addEffect} from '../redux/modules/effectHistory';

const CritButtonsContainer = connect(
    (state) => ({critTypes: state.critTypes}),
    {addEffect}
)(CritButtons);

export default CritButtonsContainer;
