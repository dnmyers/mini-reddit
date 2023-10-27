import { Container, Col, Row } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';

import Search from '../Search';

import './Header.scss';

const   Header = () => {
    const debugOn = false;

    return (
        <header>
            <Container fluid>
                <Row
                    direction='row'
                    align='center'
                >
                    <Col
                        sm={5}
                        md={4}
                        debug={debugOn ? true : false}
                    >
                        <div className="logo">
                            <FontAwesomeIcon icon={faReddit} size="lg" className="logo-icon" />&nbsp;<span className="logo-text-mini">Mini-</span><span className="logo-text-reddit">Reddit</span>
                            <FontAwesomeIcon icon={faReddit} size="lg" className="logo-icon-2" />
                        </div>
                    </Col>
                    <Col
                        sm={7}
                        md={8}
                        debug={debugOn ? true : false}
                    >
                        <Search />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;