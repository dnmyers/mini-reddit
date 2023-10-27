/* eslint-disable react/prop-types */
import { Container, Col, Row } from 'react-grid-system';

import Header from '../Header';
import Subreddits from '../../features/subreddits/Subreddits';

const Layout = ({ children }) => {
    const debugOn = false;

    return (
        <Container fluid debug={debugOn ? true : false}>
            <Row debug={debugOn ? true : false}>
                <Col sm={12} debug={debugOn ? true : false}>
                    <Header />
                </Col>
            </Row>
            <Row gutterWidth={0}>
                <Col md={4} order={{ md: 2 }}>
                    <Subreddits />
                </Col>
                <Col md={8} order={{ md: 1 }}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
}

export default Layout;