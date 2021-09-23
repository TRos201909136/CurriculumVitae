import { Row, Col } from "antd";
import { Divider } from 'antd';

const extracurricular = [
    {
        type: "Extra-curricular",
        content: [
            {
                activity: "Ballet (14 years) & Contemporary Dance (1 year)",
                comment: "Prepared 11 shows"
            },
            {
                activity: "Piano (4 years) & Music Theory (2 years)",
                comment: "Prepared 1 show"
            },
        ]
    }
];
const volunteering = [
    {
        type: "Volunteering",
        content: [
            {
                activity: "Participated to the gala of the Jeannine Manuel Foundation",
                comment: "Lorem ipsum",
            },
            {
                activity: "Was member of a student association, named 'Us For Them', to help migrants",
                comment: "Distributed hot beverages and clothes to migrants in Paris",
            },
            {
                activity: "Volunteered a few time to collect food for food banks",
                comment: "Lorem ipsum",
            },
            {
                activity: "Participated numerous times in the Run Against Hunger of Action Against Hunger",
                comment: "Researched sponsors to gain money for the number of km I was going to run for",
            },
        ]
    },
];
const role = [
    {
        type: "Position of Responsibility",
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
                comment: "Elected by my class to represent them in front of the school directors and teachers",
            },
        ]
    },
];
const international = [
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
];
const Diverse = () => {
    return (
        <div
            style={{
                overflowX: "scroll",
                height: 335,
                marginLeft: 10,
                marginRight: 10,
            }}
        >
            <Divider 
            style ={{
                backgroundColor: "#08474A",
                marginBottom: 1,
                marginTop: 0,
                marginLeft: 20,
                paddingRight: 10
            }}
            />
            <div className="title"
                style={{
                    fontWeight: 400,
                    fontSize: "20pt",
                    marginLeft: 70
                }}
            >
                Diverse
            </div>
            <Row
                gutter={[8, 8]}
                style={{
                    paddingLeft: 37,
                    paddingRight: 37
                }}
            >
                <Col span={12}>
                    {extracurricular.map((e) => {
                        return (
                            <div id="extracurricular">
                                <div id="extracurricular-type"
                                    style={{
                                        fontSize: "13pt",
                                        fontWeight: 600,
                                        // marginLeft: 65,
                                        color: "#08474A",
                                        marginBottom: -2
                                    }}
                                >
                                    {e.type}
                                </div>
                                <div id="extracurricular-content">
                                    {e.content.map((content) => {
                                        return (
                                            <div>
                                                <div
                                                    style={{
                                                        fontSize: "11pt",
                                                        fontWeight: 500,
                                                        marginBottom: -2,
                                                        lineHeight: 1.1,
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
                                                        lineHeight: 1.2,
                                                    }}
                                                >
                                                    {content.comment}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                    {volunteering.map((e) => {
                        return (
                            <div id="volunteering">
                                <div id="volunteering-type"
                                    style={{
                                        fontSize: "13pt",
                                        fontWeight: 600,
                                        color: "#08474A",
                                    }}
                                >
                                    {e.type}
                                </div>
                                <div id="volunteering-content">
                                    {e.content.map((content) => {
                                        return (
                                            <div>
                                                <div
                                                    style={{
                                                        fontSize: "11pt",
                                                        fontWeight: 500,
                                                        marginBottom: -2,
                                                        lineHeight: 1.1,
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
                                                        lineHeight: 1.2,
                                                    }}
                                                >
                                                    {content.comment}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </Col>
                <Col span={6}>
                    {role.map((e) => {
                        return (
                            <div id="role">
                                <div id="role-type"
                                    style={{
                                        fontSize: "13pt",
                                        fontWeight: 600,
                                        color: "#08474A",
                                        lineHeight: 1.1
                                    }}
                                >
                                    {e.type}
                                </div>
                                <div id="role-content">
                                    {e.content.map((content) => {
                                        return (
                                            <div>
                                                <div
                                                    style={{
                                                        fontSize: "11pt",
                                                        fontWeight: 500,
                                                        marginBottom: -2,
                                                        lineHeight: 1.1,
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
                                                        lineHeight: 1.2,
                                                    }}
                                                >
                                                    {content.comment}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </Col>
                <Col span={6}>
                    {international.map((e) => {
                        return (
                            <div id="international">
                                <div id="international-type"
                                    style={{
                                        fontSize: "13pt",
                                        fontWeight: 600,
                                        color: "#08474A",
                                    }}
                                >
                                    {e.type}
                                </div>
                                <div id="international-content">
                                    {e.content.map((content) => {
                                        return (
                                            <div id="international-content-activity">
                                                <div
                                                    style={{
                                                        fontSize: "11pt",
                                                        fontWeight: 500,
                                                        marginBottom: -2,
                                                        lineHeight: 1.1,
                                                    }}
                                                >
                                                    {content.activity}
                                                </div>
                                                {" "}
                                                <div id="international-content-comment"
                                                    style={{
                                                        fontSize: "11pt",
                                                        fontWeight: 300,
                                                        fontStyle: "italic",
                                                        lineHeight: 1.2,
                                                    }}
                                                >
                                                    {content.comment}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </Col>
            </Row>
        </div>
    )
};
export default Diverse;