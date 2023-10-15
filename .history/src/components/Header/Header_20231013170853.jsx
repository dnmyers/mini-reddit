import { Container, Col, Row } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';

import Search from '../Search';

import './Header.scss';

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col md={2} Align="left" Justify="center">
                        <a href="/">
                            <FontAwesomeIcon icon={faReddit} size="lg" />
                        </a>
                    </Col>
                    <Col md={8} Align="center" Justify="center">
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