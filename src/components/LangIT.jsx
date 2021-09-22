import {Row} from "antd";

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
                level: "***"
            },
            {
                language: "OpenRefine",
                level: "**"
            },
            {
                language: "Neo4j",
                level: "**"
            },
            {
                language: "GitHub",
                level: "**"
            },
        ]
    },
];
const itskills2 = [
    {
        title: "BLA",
        content: [
            {
                language: "HTML & CSS",
                level: "***"
            },
            {
                language: "React",
                level: "**"
            },
            {
                language: "JSX",
                level: "**"
            },
            {
                language: "Python",
                level: "**"
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
            }}
        >
            <Row
                style ={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: 40,
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
                                    <div>
                                        <span id="content">
                                            {e.content.map((content) => {

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
                                                                lineHeight: 1
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
                                                            {content.level}
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                        </span>
                                    </div>
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
                                                                lineHeight: 1
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
                                                            {content.level}
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
                                            fontWeight: 600,
                                            marginLeft: 65,
                                            color: "#08474A",
                                        }}
                                    >
                                        {e.title}
                                    </div>

                                    <Row
                                        style ={{
                                            // height: 117,
                                            
                                        }}
                                    >
                                        <div id="content">
                                            {e.content.map((content) => {

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
                                                                lineHeight: 1
                                                            }}
                                                        >
                                                            {content.language}
                                                        </span>
                                                        <span
                                                            style={{
                                                                fontSize: "11pt",
                                                                fontWeight: 600,
                                                                // fontStyle: "italic",
                                                            }}
                                                            >
                                                            {content.level}
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
            </Row>
        </div>
    )
};
export default LangIT;