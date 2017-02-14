import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const cardStyle = {
    margin: 12
};

export default function Effect({effect}){
    return (
        <Card style={cardStyle}>
            <CardHeader title={effect.name}/>
            <CardText>{effect.effect}</CardText>
        </Card>
    );
}
