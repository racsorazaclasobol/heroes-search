import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
    //Esto es para que si el actor actual es igual a los antiguos actores, solo muestre uno    
    return (alter_ego === characters) ? (<></>) : <p> { characters } </p>

}

export const HeroItem = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const heroImgUrl = `/assets/heroes/${id}.jpg`;

    return (
        <>
            <div className="col animate__animated animate__fadeIn">
                <div className="card">

                    <div className="row no-glutters">
                        <div className="col-4">
                            <img className="card-img" src={heroImgUrl} alt={ superhero } />
                        </div>

                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title"> { superhero } </h5>
                                <p className="card-text"> { alter_ego } </p>

                                <CharactersByHero alter_ego={ alter_ego } characters = { characters } />

                                <p className="card-text"> { first_appearance } </p>

                                <Link to={`/hero/${ id }`} > ...más </Link>
                                
                            </div>
                        </div>
                    </div>

                </div>                
            </div>
        </>
    )
}