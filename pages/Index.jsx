import React, { Component } from 'react';
import Layout from '../components/layout/LayoutCommon.jsx';
import Principles from '../components/principles/Principles.jsx';

export default class extends Component {
    render() {
        return <Layout>
            <Principles/>
        </Layout>;
    }
}
