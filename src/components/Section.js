import "../App.css";
import Title from "./Title";
import Header from "./Header";
import data from "./movies.json";
import logo from "../img/netflix-logo.png";

const Section = (props) => {
    return (
        <div className="container">
            <Header pic={logo} />
            {data.map((elem, index) => {
                console.log("chaque élément du tableau data", elem);
                return (
                    <div>
                        <Title key={index} title={elem.category} />
                        <div>
                            {elem.images.map((imagesrc, indeximg) => {
                                return <img src={imagesrc} alt="Movies" />;
                            })}
                        </div>
                    </div>
                );
            })}
            ;
        </div>
    );
};

export default Section;
