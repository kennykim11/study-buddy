import React from 'react'
import SelectSearch from 'react-select-search';
import "./MainSearchField.scss"

/**
 * The options array should contain objects.
 * Required keys are "name" and "value" but you can have and use any number of key/value pairs.
 */
const options = [
    {
        type: 'group',
        name: 'GCCIS',
        items: [
            {name: 'CSCI-141 Computer Science I', value: '1'},
            {name: 'CSCI-142 Computer Science II', value: '2'},
        ]
    },
    {
        type: 'group',
        name: 'KGCOE',
        items: [
            {name: 'MECE-102 Engineering Mechanics Lab', value: '3'},
        ]
    },
];


function userTyped(argument){
    console.log(argument)
}

export default ({parentCallback, data, disabled}) => {
    return <SelectSearch options={options} search name={data == 'class' ? 'class' : 'section'} placeholder={`Choose a ${data == 'class' ? 'class' : 'section'}.`} disabled={disabled} onChange={function(value){console.log(value); parentCallback(value)}}/>
}