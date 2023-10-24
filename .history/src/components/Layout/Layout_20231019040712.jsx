/* eslint-disable react/prop-types */
import { Container, Col, Row } from 'react-grid-system';

import Header from '../Header';
import Subreddits from '../../features/subreddits/Subreddits';

const Layout = ({ children }) => {
    const debugOn = false;

    return (
        <Container fluid debug={debugOn}>
            <Row debug={debugOn}>
                <Col sm={12} debug={debugOn}>
                    <Header />
                </Col>
            </Row>
            <Row gutterWidth={10}>
                <Col md={4} push={8}>
                    <Subreddits />
                </Col>
                <Col md={8} pull={4}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
}

export default Layout;