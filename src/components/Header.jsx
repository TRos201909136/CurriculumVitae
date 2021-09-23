import { Col, Row } from "antd";
import Image from "./Phototiphaineros2021.JPEG";

const Header = () => {
    return (
        <div style = {{
            backgroundColor: "#08474A",
            height: 115,
            width: "100%",
        }}>
            <Row 
            gutter={[8, 8]}>
                        <Col span={6}
                            style ={{
                                paddingTop: 25,
                                color: "#ffffff",
                                textAlign: "center"
                            }}>
                        <span>
                                <div>
                                    Born: 14 Aug 2001 in Paris
                                </div>
                                <div>
                                    Nationality: French
                                </div>
                                <div>
                                    Bilingual: French-English
                                </div>
                                <div
                                    style={{
                                        fontSize: "9pt",
                                        fontWeight: 200,
                                        // marginTop: 5,
                                    }}>
                                    CV made with ReactJS
                                </div>
                        </span>
                        </Col>
                <Col span={12}>
                <span 
                    style = {{
                        paddingLeft: "22%",
                        fontWeight: 600,
                        fontSize: "30pt",
                        color: "#ffffff",
                        lineHeight: 3
                    }}
                >
                    Tiphaine Ros
                </span>
                </Col>
                        <Col span={6}>
                            <span
                                style = {{
                                    paddingLeft: "24%",
                                    lineHeight: 12,
                                }}>
                                <img src={Image} height= "150" alt="CV" />
                            </span>
                        </Col>
            </Row>
        </div>
    )
};

export default Header;