import { useContext } from 'react';
import { AuthContext } from '../../auth/context';
import { HeroList } from '../components';

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />

      <HeroList publisher='Marvel Comics' />

    </>
  )
}