import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

export default function Header({clearHistory}){
    const clearButton = <FlatButton label="clear" />;

    return (
        <AppBar
            title="Crit Cards"
            showMenuIconButton={false}
            iconElementRight={clearButton}
            onRightIconButtonTouchTap={clearHistory} />
    );
}
