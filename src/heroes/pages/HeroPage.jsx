import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { GetHeroById } from "../helpers";

export const HeroPage = () => {

  const navigate = useNavigate();

  //...rest es para que me traiga el resto de parametros fuera del id que ya desestruscture
  const { id, ...rest } = useParams(); //useParams es un custom Hooks de react-router-dom que me retorna las variables dentro de la url

  //useMemo memorizará los valores entregados por GetHeroById, para así
  //cuando cambie cualquier otro elemento no se vuelva a renderizar ni a 
  //llamar, esto será asi solo mientras el id no cambie, por eso agregamos
  //una coma y entre llaves cuadradas especificamos cual es el desencadenante
  //de su re ejecucion, en este caso, el id. 
  const hero = useMemo( () => GetHeroById(id), [ id ]);

  if ( !hero ) {
    return <Navigate to='/marvel' />    
  }

  const onNavigateBack = () => {

    //-1 es para volver a la página anterior desde el historial de navegación
    navigate(-1);

  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img className="img-thumbnail rounded animate__animated animate__fadeIn" src={ `/assets/heroes/${id}.jpg` } alt="" />
        </div>

        <div className="col-8">
          <h3> { hero.superhero } </h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter Ego:</b> { hero.alter_ego }</li>
            <li className="list-group-item"> <b>Publisher:</b> { hero.publisher }</li>
            <li className="list-group-item"> <b>First appearance:</b> { hero.first_appearance }</li>
            <li className="list-group-item"> <b>Characters:</b> { hero.characters }</li>
          </ul>

          <button 
            className="btn btn-outline-primary mt-5"
            onClick = { onNavigateBack }
            > Regresar </button>
        </div>
      </div>

    </>
  )
}
