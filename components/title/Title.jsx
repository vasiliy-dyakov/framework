import React, { Component } from 'react';

export default class extends Component {
    render() {
        return <h2 className='title'>{this.props.children}</h2>;
    }
}
