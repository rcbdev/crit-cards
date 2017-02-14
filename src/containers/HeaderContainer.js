import {Header} from '../components';
import {connect} from 'react-redux';
import {clearHistory} from '../redux/modules/effectHistory';

const HeaderContainer = connect(
    (state) => ({}),
    {clearHistory}
)(Header);

export default HeaderContainer;
