import { Container, Col, Row } from 'react-grid-system';

import Search from '../Search';

import './Header.scss';

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col md={2}>
                        <h1>My React App!</h1>
                    </Col>
                    <Col md={8}>
                        <Search />
                    </Col>
                    <Col md={2}>
                        &nbsp;
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;