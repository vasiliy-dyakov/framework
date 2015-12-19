import React, { Component } from 'react';
import Layout from '../components/layout/LayoutCommon.jsx';
import Link from '../components/link/Link.jsx';

export default class extends Component {
    render() {
        return <Layout>
            <p><Link href='/demo1/'>Bad link</Link></p>
        </Layout>;
    }
}
