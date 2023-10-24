import { Container, Col, Row } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';

import Search from '../Search';

import './Header.scss';

const   Header = () => {
    const debugOn = "false";

    return (
        <header>
            <Container
                fluid
                debug={debugOn.toString()}
            >
                <Row
                    direction='row'
                    debug={debugOn.toString()}
                    align='center'
                    justify='center'
                >
                    <Col
                        sm={5}
                        md={4}
                        debug={debugOn.toString()}
                    >
                        <div className="logo">
                            <FontAwesomeIcon icon={faReddit} size="lg" className="logo-icon" />&nbsp;<span className="logo-text-mini">Mini-</span><span className="logo-text-reddit">Reddit</span>
                            <FontAwesomeIcon icon={faReddit} size="lg" className="logo-icon-2" />
                        </div>
                    </Col>
                    <Col
                        sm={7}
                        md={8}
                        debug={debugOn.toString()}
                    >
                        <Search />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;