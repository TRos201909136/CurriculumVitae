import {Row} from "antd";

const data = [
    {
        type: "Extra-curricular",
        content: [
            {
                activity: "Ballet (14 years) & Contemporary Dance (1 year)",
                comment: "Lorem ipsum"
            },
            {
                activity: "Piano (4 years) & Music Theory (2 years)",
                comment: "Lorem ipsum"
            },
        ]
    },
    {
        type: "Volunteering",
        content: [
            {
                activity: "Participated to the gala of the Jeannine Manuel Foundation",
                comment: "Lorem ipsum",
            },
            {
                activity: "Was member of a student association, named 'Us For Them', to help migrants",
                comment: "Lorem ipsum",
            },
            {
                activity: "Volunteered a few time to collect food for food banks",
                comment: "Lorem ipsum",
            },
            {
                activity: "Was member of a student association, named 'Us For Them', to help migrants",
                comment: "Lorem ipsum",
            },
        ]
    },
    {
        type: "Role",
        content: [
            {
                activity: "Student Academic Mentor",
                comment: "Lorem ipsum",
            },
            {
                activity: "Communication & Media Officer of the LSESU French Society",
                comment: "(2020-2021)",
            },
            {
                activity: "Editor of the EJM Yearbook",
                comment: "Lorem ipsum",
            },
            {
                activity: "Class Representative",
                comment: "Lorem ipsum",
            },
        ]
    },
    {
        type: "International",
        content: [
            {
                activity: "Summer Camps in the UK",
                comment: "Received an award for leadership skills at a Leadership Training Camp",
            },
            {
                activity: "Trips to China",
                comment: "Immersed myself in the Chinese culture by living with a Chinese family for a few days",
            },
            {
                activity: "Numerous trips to Europe (including Italy, UK and Russia) & to the US",
            },
        ]
    },
]

const Diverse = () => {
    return (
        <div
            style={{
                overflowY: "scroll",
                height: 301,
                margin: 10
            }}
        >
            <div className="title"
                style={{
                    fontWeight: 400,
                    fontSize: "20pt",
                    marginLeft: 37
                }}
            >
                Diverse
            </div>
            <Row
                style ={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: 40,
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
                                    <div
                                        style={{
                                            fontSize: "13pt",
                                            fontWeight: 600,
                                            marginLeft: 65,
                                            color: "#08474A",
                                        }}
                                    >
                                        {e.type}
                                    </div>
                                    <div>
                                        <span id="content">
                                            {e.content.map((content) => {

                                                return (
                                                    <div
                                                        style={{
                                                            width: 245,
                                                        }}>
                                                        <div
                                                            style={{
                                                                fontSize: "11pt",
                                                                fontWeight: 500,
                                                            }}
                                                        >
                                                            {content.activity}
                                                        </div>
                                                        {" "}
                                                        <div
                                                            style={{
                                                                fontSize: "11pt",
                                                                fontWeight: 300,
                                                                fontStyle: "italic",
                                                            }}
                                                            >
                                                            {content.comment}
                                                        </div>
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
            </Row>
        </div>
    )
};
export default Diverse;