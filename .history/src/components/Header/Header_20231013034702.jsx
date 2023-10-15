import { Container, Col, Row } from 'react-grid-system';

import Search from '../Search';

import './Header.scss';

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col md={2} Align="left">
                        <h4>My React App!</h4>
                    </Col>
                    <Col md={8} Justify="center">
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