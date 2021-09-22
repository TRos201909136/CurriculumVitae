const data = [
    {
        date: [
            "Aug 2021",
            "-",
            "Sep 2021"
        ],
        company: "News Tank",
        companytype: "Media group",
        city: "Paris",
        typeofinternship: "Team data",
        content: [
            {
                firstcomment: "Lorem Ipsum",
            },
            {
                firstcomment: "Lorem Ipsum",
            }
        ]
    },
    {
        date: [
            "Apr 2020"
        ],
        company: "JP Morgan",
        companytype: "Investment Bank",
        city: "London",
        typeofinternship: "Spring Insight into Finance for Non-Finance",
        content: [
            {
                firstcomment: "Lorem Ipsum",
            }
        ]
    },
    {
        date: [
            "Jun 2017"
        ],
        company: "Paris-Sciences-et-Lettres",
        companytype: "Community of universities",
        city: "Paris",
        typeofinternship: "Observation internship",
        content: [
            {
                firstcomment: "Lorem Ipsum",
            }
        ]
    },
    {
        date: [
            "Jun 2016"
        ],
        company: "Hôtel Le Meurice",
        companytype: "French hotel",
        city: "Paris",
        typeofinternship: "Observation internship",
        content: [
            {
                firstcomment: "Observed different sector of the hotel industry and wrote a report about the internship",
            }
        ]
    },
]
const Internships = () => {
    return (
        <div 
            style={{
                marginBottom: 10,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 2,
                overflowY: "scroll",
                height: 220,
                paddingLeft: 20,
                paddingRight: 20, 
            }}
        >
            <div className="title"
                style={{
                    fontWeight: 400,
                    fontSize: "20pt",
                    marginLeft: 37,
                    marginTop: -5
                }}
            >
                Internships
            </div>
            {
                data.map((e) => {
                    return (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                marginBottom: -3
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
                                    fontSize: "11pt"
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
                                <div id="company - city"
                                    style={{
                                        marginBottom: -6
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "13pt",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {e.company}
                                    </span>
                                    {" - "}
                                    <span
                                        style={{
                                            fontSize: "11pt",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {e.companytype}
                                    </span>
                                    {" - "}
                                    <span
                                        style={{
                                            fontSize: "11pt",
                                            fontWeight: 500
                                        }}
                                    >
                                        {e.city}
                                    </span>
                                    {" "}
                                    <span
                                        style={{
                                            fontSize: "11pt",
                                            fontStyle: "italic",
                                            fontWeight: 300
                                        }}
                                    >
                                        {e.typeofinternship}
                                    </span>
                                </div>
                                <div id="firstcomment: comments">
                                    {e.content.map((content) => {
                                        return (
                                            <div>
                                                <span
                                                    style={{
                                                        fontWeight: 400,
                                                        fontSize: "11pt",
                                                        lineHeight: 0.1,
                                                    }}
                                                >
                                                    {content.firstcomment}
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
export default Internships;