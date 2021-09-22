import {Row,Divider} from "antd";

const data = [
    {
        language: "In English",
        content: [
            {
                date: "Jan 2022",
                exam: "Graduate Management Admission Test",
                acronym: "GMAT"
            },
            {
                date: "May 2018",
                exam: "Scholastic Assessment Test",
                acronym: "SAT"
            },
            {
                date: "Jun 2016",
                exam: "International General Certificate of Secondary Education",
                acronym: "IGCSE"
            },
        ]
        
    },
    {
        language: "In Spanish",
        content: [
            {
                date: "May 2018",
                exam: "Diploma of Spanish as a Foreign Language",
                acronym: "DELE B2"
            },
            {
                date: "May 2016",
                exam: "Diploma of Spanish as a Foreign Language",
                acronym: "DELE B1"
            },
        ]
    },
    {
        language: "In Chinese",
        content: [
            {
                date: "2020",
                exam: "LSE Certificate of Proficiency",
                acronym: "LSE B2/C1"
            },
            {
                date: "Jun 2018",
                exam: "Hanyu Shuiping Kaoshi",
                acronym: "HSK IV"
            },
            {
                date: "Jun 2017",
                exam: "Hanyu Shuiping Kaoshi",
                acronym: "HSK III"
            },
            {
                date: "Jun 2014",
                exam: "Youth Chinese Test",
                acronym: "YCT III"
            },
        ]
    },
]

const Languagecertificates = () => {
    return (
        <div
            style={{
                overflowY: "scroll",
                height: 171,
                margin: 10,
                paddingLeft: 20,
                paddingRight: 20, 
            }}
        >
            <div
                style={{
                    fontWeight: 400,
                    fontSize: "15pt",
                    marginLeft: 37,
                    marginBottom: -8,
                    marginTop: -5
                }}
            >
                Certificates
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
                                        {e.language}
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
                                                            {content.date}
                                                        </span>
                                                        {" "}
                                                        <span
                                                            style={{
                                                                fontSize: "11pt",
                                                                fontWeight: 600,
                                                                // fontStyle: "italic",
                                                            }}
                                                            >
                                                            {content.acronym}
                                                        </span>
                                                        {" - "}
                                                        <span
                                                            style={{
                                                                fontSize: "11pt",
                                                                fontWeight: 300,
                                                            }}
                                                        >
                                                            {content.exam}
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                            <Divider type="vertical"/>
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
export default Languagecertificates;