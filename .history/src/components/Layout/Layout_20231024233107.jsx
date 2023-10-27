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
            <Row>
                <Col md={4} lg={3} xl={2} order={{ md: 2 }}>
                    <div className="layout__subreddits-container">
                        <Subreddits />
                    </div>
                </Col>
                <Col md={8} lg={9} xl={10} order={{ md: 1 }}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
}

export default Layout;