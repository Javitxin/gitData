import React , {useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setLoading, setUser, setError } from './redux/userSlice';
import useGitHubUser from './hooks/useGitHubUser';


function UserProfile ({username}) {
  const dispatch =useDispatch();
  const { user, loading, error } = useGitHubUser(username);

  useEffect (() => {
    dispatch(setUser(user));
    dispatch(setLoading(loading));
    dispatch(setError(error));
  }, [ dispatch, user, loading, error]);

  if (loading) {
    return <div>Cargando</div>;
  }
  if (error){
    return <div>Error: {error}</div>;
  }
  if(!user) {
    return null;
  }
  return (
    <div>
      <h2>{user.name}</h2>
      <p>UserName: {user.login}</p>
      <p>Seguidores: {user.followers}</p>
      <p>Repositorios: {user.public_repos}</p>
      <img src={user.avatar_url} alt='Avatar' />
    </div>
  );
}
export default UserProfile;


/*
function App(username) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(setUser());
      setLoading(true);
      try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        if(!response.ok) {
          throw new Error('Usuario no encontrado');
        }
        const userData = await response.json();
        dispatch(setUser(userData));
      } catch (error) {
        //dispatch(fetchUserFailure(error.message));
      }
    }
    fetchUser();
  
  },[dispatch, username]);
  
  
  return (
  <div>
    {loading && <p> Cargando...</p>}
    {error && <p>{error}</p>}
    {user && (
      <div>
        <h1>{user.name}</h1>
        <p>Nombre de usuario: {user.login}</p>
        <p>Seguidores: {user.followers}</p>
        <p>Repositorios publicos: {user.public_repos}</p>
        <img src={user.avatar_url} alt="Avatar"/>
      </div>
    )}
  </div>
  );
};

export default App;
*/