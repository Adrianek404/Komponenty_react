import React, { Component } from 'react';

class InfoPanel extends Component {
    render() {
        return (
            <div className="info-panel">
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

class InfoPanelContainer extends Component {
    render() {
        const data = this.props.data;

        return (
            <div>
                {data.map((item, index) => (
                    <InfoPanel key={index} title={item.title} content={item.content} />
                ))}
            </div>
        );
    }
}

export { InfoPanel, InfoPanelContainer };
