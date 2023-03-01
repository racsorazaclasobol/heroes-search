import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm'
import { GetHeroByName } from '../helpers';
import { HeroItem } from '../components';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  //Aca inicimos la instalacion de query-string con yarn add query-string
  const { query = '' } = queryString.parse(location.search);

  const heroes = GetHeroByName(query);

  const showMessage = (query.length === 0);
  const showError   = (query.length > 0) && (heroes.length === 0)

  const {searchText, onInputChange} = useForm({
    searchText: query
  });

  const onSearchSubmit = ( event ) => {
    event.preventDefault();

    navigate( `?q=${ searchText }` );
  }

  return (
    <>
      <h1>Search Page</h1>
      <br />

      <div className="row">

        <div className="col-5">
          <h4>Searching...</h4>
          <hr />

          <form data-testid='form' onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              placeholder="Search a Hero"
              className="form-control"
              name="searchText"
              value={ searchText }
              onChange={ onInputChange }
              autoComplete = "off"
            />

          <button className="btn btn-outline-primary mt-4"> Search </button>
          </form>
          
        </div>

        <div className="col-7">
          <h4>Result</h4>
          <hr />

          <div className="alert alert-primary animate__animated animate__fadeIn"  style={{ display: showMessage ? '' : 'none' }} data-testid='divSearch'>
            Search a hero.
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }} data-testid='divError'>
            No hero with <b>{ query }</b>
          </div>

          {
            heroes.map(hero => 
              <HeroItem key={ hero.id } { ...hero }/>
            )
          }

        </div>


      </div>

    </>
  )
}
