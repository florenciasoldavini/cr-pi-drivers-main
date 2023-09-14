import Card from "./Card";
import { findAndAddSpace } from "../auxFunctions";

const Cards = ({ drivers }) => {

    return (
        <div className="cards">
           {
              drivers.map(({ id, forename, surname, image, teams }) => {
                 return <Card key={id}
                    id={id}
                    forename={forename}
                    surname={surname}
                    image={image}
                    teams={findAndAddSpace(teams)}
                 />
              })
           }
        </div>
     )
};

export default Cards;