import Header from "./Header";
import Education from "./Education";
import Languagecertificates from "./Languagecertificates";
import Internships from "./Internships";
import Diverse from "./Diverse";
import LangIT from "./LangIT";
import Footer from "./Footer";

const Builder = () => {
    return (
    <div style={{
        backgroundColor: "white",
        height: 1186,
        width: 840,
    }}>
    
        <div>
            <Header />
        </div>
        <Education />
        <Languagecertificates />
        <Internships />
        <div>
            <Diverse />
        </div>
        <div>
            <LangIT />
        </div>
        <div>
            <Footer />
        </div>
    </div>
    )
};

export default Builder;