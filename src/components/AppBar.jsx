import { Div, P } from './styles';

const AppBar = ({title}) => {
  return <Div color='bg2nd' style={{height:'10%',justifyContent: 'center' }}>
    <P fontSize='h1'> {title} </P>
    </Div>;
};

export default AppBar;