import { Link } from 'react-router-native';
import { ScrollView } from 'react-native';
import { Div, P } from './styles';

const AppBar = () => {
  return(
     <Div color='bg2nd' style={{ height: '10%', justifyContent: 'center' }}>
    <ScrollView horizontal>
      <Link to='/'><P fontSize='h1'> Repositories </P></Link>
      <Link to='/signin'><P fontSize='h1'> Signin </P></Link>
    </ScrollView>
  </Div>
)};

export default AppBar;