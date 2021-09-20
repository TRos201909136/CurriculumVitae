const data = [
    {
        date: [
            2019,
            "-",
            2022
        ],
        school: "London School of Economics and Political Science",
        city: "London",
        content: [
            {
                diploma: "BSc Politics & Economics",
                comments: ", last year minors: Mathematics, Management, Data Analysis, Data Science"
            }
        ]
    },
    {
        date: [
            "Jun 2021"
        ],
        school: "HEC",
        city: "Paris",
        content: [
            {
                diploma: "Summer school",
                comments: ": Geopolitics, Globalization and Business Strategy",
            }
        ]
    },
    {
        date: [
            2007,
            "-",
            2019
        ],
        school: "Ecole Jeannine Manuel",
        city: "Paris",
        content: [
            {
                diploma: "French Scientific Baccalaureate",
                comments: ": American section OIB, specialisation Computer Science, Mention Très Bien",
            },
            {
                diploma: "Academic awards",
                comments: ": Jeannine Manuel Awards in grade 9, 10 and 11 (top 10% of each promo)",
            }
        ]
    },
]
const Education = () => {
    return (
        <div
            style={{
                margin: 10
            }}
        >
            <div
                style={{
                    fontWeight: 400,
                    fontSize: "24pt",
                    marginLeft: 37
                }}
            >
                Education
            </div>
            {
                data.map((e) => {
                    return (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                marginBottom: 10
                            }}
                        >
                            <div id="dates"
                                style={{
                                    width: 80,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    marginTop: 6,
                                    fontWeight: 400,
                                    fontSize: "12pt"
                                }}
                            >
                                {e.date.map((period) => {
                                    return (
                                        <span
                                            style={{
                                                color: period !== "-" ? "#08474A" : "black",
                                                lineHeight: period !== "-" ? 1 : 0.4,
                                            }}
                                        >
                                            {period}
                                        </span>
                                    )
                                })}
                            </div>
                            <div id="school and diplomas">
                                <div id="school - city"
                                    style={{
                                        // marginBottom: 10
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "14pt",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {e.school}
                                    </span>
                                    {" - "}
                                    <span
                                        style={{
                                            fontSize: "12pt",
                                            fontWeight: 500
                                        }}
                                    >
                                        {e.city}
                                    </span>
                                </div>
                                <div id="diploma: comments">
                                    {e.content.map((content) => {
                                        return (
                                            <div>
                                                <span
                                                    style={{
                                                        fontStyle: "italic",
                                                        fontWeight: 400,
                                                        fontSize: "12pt"
                                                    }}
                                                >
                                                    {content.diploma}
                                                </span>
                                                <span
                                                    style={{
                                                        fontWeight: 300,
                                                        fontSize: "12pt"
                                                    }}
                                                >
                                                    {content.comments}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};
export default Education;