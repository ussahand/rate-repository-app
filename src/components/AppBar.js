import { Link } from 'react-router-native';
import { ScrollView } from 'react-native';
import { Div, P, WINDOW } from '../styles';

import { ME_INFO } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const AppBar = () => {
  const { data } = useQuery(ME_INFO)
  const user = data?.me?.username

  return (
    <Div color='bg2nd' style={{ height: WINDOW.height / 10, justifyContent: 'center' }}>
      <ScrollView horizontal>
        <Link to='/'><P fontSize='h1'> Repositories </P></Link>
       {!user && <Link to='/signin'><P fontSize='h1'> Signin </P></Link>}
        {user && <Link to='/signout'><P fontSize='h1'>Sign out</P></Link> }
      </ScrollView>
    </Div>
  )
};

export default AppBar;