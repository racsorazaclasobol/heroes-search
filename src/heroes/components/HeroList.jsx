import { HeroItem } from './';
import { getHeroesByPublisher } from '../helpers';
import { useMemo } from 'react';

export const HeroList = ({ publisher }) => {

    //useMemo memorizará los valores entregados por getHeroesByPublisher, para así
    //cuando cambie cualquier otro elemento no se vuelva a renderizar ni a 
    //llamar, esto será asi solo mientras el publisher no cambie, por eso agregamos
    //una coma y entre llaves cuadradas especificamos cual es el desencadenante
    //de su re ejecucion, en este caso, el publisher. 
    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( hero => (
                    <HeroItem 
                        key={ hero.id } 
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}