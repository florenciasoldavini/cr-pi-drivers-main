import Card from "./Card";

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
                    teams={teams}
                 />
              })
           }
        </div>
     )
};

export default Cards;