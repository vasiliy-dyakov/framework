import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Title from '../title/Title.jsx';
import PrinciplesAddForm from './PrinciplesAddForm.jsx';
import { Input, Button } from 'react-bootstrap';

@connect(state => ({
    principles: state.principles
}))
export default class extends Component {
    static propTypes = {
        principles: PropTypes.array.isRequired
    };

    static defaultProps = {
        principles: []
    };

    onSubmit(event) {
    }

    render() {
        return <div className='principles'>
            <Title>Основные принципы во что я верю</Title>
            <form ref='form' onSubmit={this.onSubmit.bind(this)}>
                <div className='principlesAddForm'>
                    <Input
                        type='text'
                        name='text'
                        bsSize='medium'/>
                    <Button type='submit' bsStyle='primary'>Добавить</Button>
                </div>
            </form>
            {this.props.principles.map(item => <div className='principlesItem'>
                {item.text}
            </div>)}
        </div>;
    }
}
