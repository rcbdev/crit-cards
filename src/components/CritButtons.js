import React from 'react';
import CritButton from './CritButton';

export default function CritButtons({critTypes, addEffect}){
    const buttonRows = [];

    for(const critMiss of Object.keys(critTypes)){
        buttonRows.push(
            <div key={critMiss}>
                {critTypes[critMiss].map(t => <CritButton key={critMiss + t} critMiss={critMiss} attackType={t} addEffect={addEffect} />)}
            </div>
        );
    }

    return (
        <div style={{textAlign: "center"}}>
            {buttonRows}
        </div>
    );
}
