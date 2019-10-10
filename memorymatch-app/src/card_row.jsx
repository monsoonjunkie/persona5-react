import React from 'react';
import Card from './card.jsx'

export default class CardRow extends React.Component{

    render() {
        return (
            <div className="card_row">
                <Card/>
            </div>
        )
    }
}