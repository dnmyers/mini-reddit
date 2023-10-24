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
                    align='center'
                    justify='center'
                >
                    <Col
                        sm={6}
                        md={4}
                        debug={debugOn}
                    >
                        <div className="logo">
                            <FontAwesomeIcon icon={faReddit} size="lg" className="logo-icon" />&nbsp;<span className="logo-text-mini">Mini-</span><span className="logo-text-reddit">Reddit</span>
                            <FontAwesomeIcon icon={faReddit} size="lg" className="logo-icon-2" />
                        </div>
                    </Col>
                    <Col
                        sm={6}
                        md={8}
                        debug={debugOn}
                    >
                        <Search />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;