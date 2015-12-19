import React, { Component } from 'react';
import Layout from '../components/layout/LayoutCommon.jsx';
import Link from '../components/link/Link.jsx';

export default class extends Component {
    render() {
        return <Layout>
            <p>Main content here.</p>
            <p><Link href='/demo/'>Demo page.</Link></p>
        </Layout>;
    }
}
