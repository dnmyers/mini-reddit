import { Container, Col, Row } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';

import Search from '../Search';

import './Header.scss';

const Header = () => {
    const debugOn = false;

    return (
        <header>
            <Container
                fluid
                debug={debugOn}
            >
                <Row
                    direction='row'
                    debug={debugOn}
                >
                    <Col md={4} debug>
                        <div className="logo">
                            <FontAwesomeIcon icon={faReddit} size="lg" className="logo-icon" />&nbsp;<span className="logo-text-mini">Mini</span>-<span className="logo-text-reddit">Reddit</span>
                        </div>
                    </Col>
                    <Col md={6} debug>
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