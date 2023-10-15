import { Container, Col, Row } from 'react-grid-system';

import './Header.scss';

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col md={3}>
                        <h1>My React App!</h1>
                    </Col>
                    <Col md={9}>
                        <Search />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;