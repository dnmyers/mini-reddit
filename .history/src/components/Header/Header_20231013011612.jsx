import { Container, Col, Row } from 'react-grid-system';

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col>
                        <h1>My React App!</h1>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;