import "../App.css";
import Title from "./Title";
import Movies from "./Films";
import data from "./movies.json";

const Section = (props) => {
    return (
        <div className="container">
            {data.map((elem, index) => {
                console.log("chaque élément du tableau data", elem);
                return <Title key={index} title={elem.category} />;
            })}
            ;
            {data.map((elem, index) => {
                console.log("chaque élément du tableau data", elem);
                return <Movies key={index} movies={elem.images} />;
            })}
            ;
        </div>
    );
};

export default Section;
