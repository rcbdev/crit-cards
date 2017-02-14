import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
    margin: 12
};

export default function CritButton({critMiss, attackType, addEffect}){
    const label = critMiss + " " + attackType;
    return (
        <RaisedButton
            style={buttonStyle}
            onTouchTap={() => addEffect(critMiss, attackType)}
            label={label}
            primary={critMiss === "Hit"}
            secondary={critMiss === "Fumble"} />
    );
}
