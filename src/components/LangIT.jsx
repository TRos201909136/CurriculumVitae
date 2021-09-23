import { Row, Col, Divider } from "antd";
import { ReactComponent as Star } from './star_black_18dp.svg';

const language = [
    {
        title: "Languages",
        content: [
            {
                language: "French",
                level: ": Fluent"
            },
            {
                language: "English",
                level: ": Fluent"
            },
            {
                language: "Spanish",
                level: ": Fluent"
            },
            {
                language: "Chinese",
                level: ": Good notions"
            },
        ]
    },
];
const itskills1 = [
    {
        title: "IT skills",
        content: [
            {
                language: "Python",
                level: 3
            },
            {
                language: "OpenRefine",
                level: 3
            },
            {
                language: "Neo4j",
                level: 2
            },
            {
                language: "GitHub",
                level: 1
            },
        ]
    },
];
const itskills2 = [
    {
        title: "IT skills",
        content: [
            {
                language: "HTML & CSS",
                level: 3
            },
            {
                language: "ReactJS",
                level: 1
            },
            {
                language: "Regex",
                level: 1
            },
            {
                language: "Suites Office365, Apple & Google",
                level: 4
            },
        ]
    },
]

const LangIT = () => {
    return (
        <div
            style={{
                overflowY: "hidden",
                height: 115,
                paddingLeft: 20,
                paddingRight: 20,
                marginLeft: 10,
                marginRight: 10
            }}
        >
        <Divider 
            style ={{
                backgroundColor: "#08474A",
                marginBottom: 1,
                marginTop: 0,
            }}
        />
            <Row
                style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: 24,
                }}
            >
                {
                    language.map((e) => {
                        // console.log(e.content)
                        return (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "30%"
                                }}
                            >
                                <div id="language certificates">
                                    <div id="language"
                                        style={{
                                            marginTop: -3
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: "20pt",
                                                fontWeight: 400,
                                                marginLeft: 24,
                                            }}
                                        >
                                            {e.title}
                                        </div>
                                        <Row>
                                        <div>
                                            <span id="content">
                                                {e.content.map((content) => {

                                                    return (
                                                        <div
                                                            style={{
                                                                width: 245,
                                                                lineHeight: 1.2,
                                                            }}>
                                                            <Row gutter={[1, 1]}>
                                                                <Col span={5}>
                                                            <span
                                                                style={{
                                                                    fontSize: "11pt",
                                                                    fontWeight: 500,
                                                                    color: "#08474A",
                                                                    lineHeight: 1.2
                                                                }}
                                                            >
                                                                {content.language}
                                                            </span>
                                                                </Col>
                                                            {" "}
                                                                <Col span={12}>
                                                            <span
                                                                style={{
                                                                    fontSize: "11pt",
                                                                    fontWeight: 600,
                                                                    // fontStyle: "italic",
                                                                }}
                                                            >
                                                                {content.level}
                                                            </span>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    )
                                                })}
                                            </span>
                                        </div>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    itskills1.map((e) => {
                        // console.log(e.content)
                        return (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "20%"
                                }}
                            >
                                <div id="language certificates">
                                    <div id="language"
                                        style={{
                                            marginTop: -3
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: "20pt",
                                                fontWeight: 400,
                                                marginLeft: 65,
                                            }}
                                        >
                                            {e.title}
                                        </div>

                                        <Row>
                                            <div id="content">
                                                {e.content.map((content) => {
                                                    console.log(content.language, content.level);

                                                    return (
                                                        <div
                                                            style={{
                                                                width: 245,
                                                                lineHeight: 1.2,
                                                            }}>
                                                            <span
                                                                style={{
                                                                    fontSize: "11pt",
                                                                    fontWeight: 500,
                                                                    color: "#08474A",
                                                                    lineHeight: 1,
                                                                    marginBottom: 1
                                                                }}
                                                            >
                                                                {content.language}
                                                            </span>
                                                            {" "}
                                                            <span
                                                                style={{
                                                                    fontSize: "11pt",
                                                                    fontWeight: 600,
                                                                    // fontStyle: "italic",
                                                                }}
                                                            >
                                                                {
                                                                    new Array(content.level).fill(0).map((_, i) => {
                                                                        return (
                                                                            <Star />
                                                                        )
                                                                    })
                                                                }
                                                            </span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    itskills2.map((e) => {
                        // console.log(e.content)
                        return (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "50%"
                                }}
                            >
                                <div id="language certificates">
                                    <div id="language"
                                        style={{
                                            marginTop: "-3px"
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: "20pt",
                                                fontWeight: 400,
                                                marginLeft: 65,
                                                color: "transparent"
                                            }}
                                        >
                                            {e.title}
                                        </div>

                                        <Row
                                            style={{
                                                // height: 117,
                                            }}
                                        >
                                            <div id="content">
                                                {e.content.map((content) => {

                                                    return (
                                                        <Row
                                                            // align="middle"
                                                            style={{
                                                                width: 245,
                                                                // marginTop: "-10px",
                                                                height: 18,
                                                            }}>
                                                            <Col
                                                                style={{
                                                                    fontSize: "11pt",
                                                                    fontWeight: 500,
                                                                    color: "#08474A",
                                                                    // lineHeight: 1
                                                                }}
                                                            >
                                                                {content.language}
                                                            </Col>
                                                            <Col
                                                                style={{
                                                                    display: "flex",
                                                                    alignItems: "center"
                                                                }}
                                                            >
                                                                {
                                                                    new Array(content.level).fill(0).map((_, i) => {
                                                                        return (
                                                                            <span
                                                                                style={{
                                                                                    // paddingTop: 5
                                                                                }}
                                                                            >
                                                                                <Star />
                                                                            </span>
                                                                        )
                                                                    })
                                                                }
                                                            </Col>
                                                        </Row>
                                                    )
                                                })}
                                            </div>
                                        </Row>
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
export default LangIT;