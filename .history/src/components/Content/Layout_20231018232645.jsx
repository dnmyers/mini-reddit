import { Container, Col, Row } from 'react-grid-system';

import Header from '../Header';
import Subreddits from '../../features/subreddits/Subreddits';

const Layout = ({ children }) => {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    {children}
                </Col>
                <Col md={4}>
                    <Subreddits />
                </Col>
            </Row>
        </Container>
    );
}

export default Layout;