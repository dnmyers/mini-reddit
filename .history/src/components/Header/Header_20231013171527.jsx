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
                    <Col md={2}>
                        <a href="/" className="logo-icon">
                            <FontAwesomeIcon icon={faReddit} size="lg" style={{ color: "#0079D3" }} /> <span className="mini">Mini</span>-<span className="reddit">Reddit</span>
                        </a>
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