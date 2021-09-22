import {Row} from "antd";

const data = [
    {
        contact: "35 rue du Hameau 75015 Paris France",
        contact2: "96 Globe View 10 High Timber Street EC4V3PS London UK"
        
    },
    {
        contact: "t.ros19@ejm.org",
        contact2: "t.ros@lse.ac.uk"
    },
    {
        contact: "+33602394383",
    },
    {
        contact: "GitHub: TiphaineRos",
    },
]

const Footer = () => {
    return (
        <div
            style={{
                overflowY: "scroll",
                height: 50,
                backgroundColor: "#08474A",
                width: "100%"
            }}
        >
            <Row
                style ={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}
            >
            {
                data.map((e) => {
                    // console.log(e.content)
                    return (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div id="language certificates">
                                <div id="language"
                                    style={{
                                        marginTop: 4
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "10pt",
                                            fontWeight: 500,
                                            marginLeft: 40,
                                            color: "#ffffff",
                                        }}
                                    >
                                        {e.contact}
                                    </span>
                                    <div
                                        style={{
                                            fontSize: "10pt",
                                            fontWeight: 500,
                                            marginLeft: 40,
                                            color: "#ffffff",
                                        }}
                                    >
                                        {e.contact2}
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </Row>
        </div>
    )
};
export default Footer;