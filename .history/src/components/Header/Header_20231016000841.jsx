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
                    <Col
                        md={4}
                        debug={debugOn}
                    >
                        <div className="logo">
                            <FontAwesomeIcon icon={faReddit} size="lg" className="logo-icon" />&nbsp;<span className="logo-text-mini">Mini</span>-<span className="logo-text-reddit">Reddit</span>
                            <FontAwesomeIcon icon={faReddit} size="lg" className="logo-icon-2" />
                        </div>
                    </Col>
                    <Col
                        md={6}
                        debug={debugOn}
                    >
                        <Search />
                    </Col>
                    <Col
                        md={2}
                        debug={debugOn}
                    >
                        &nbsp;
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;