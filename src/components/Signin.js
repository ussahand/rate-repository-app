import { Div, P, Per, Input, Button } from './styles';
import { Formik } from 'formik'
import * as yup from 'yup'

const initialValues = {
  userName: '',
  password: '',
}
const validationYupSchema = yup.object().shape({
  userName: yup.string().min(3, 'user name should be longer').required('user name is required'),
  password: yup.string().min(4,'password should be longer').required('password is required'),
})

const submitForm = values => console.log('sign in values are:',values)

const FormikInput = ({name , placeholder, values, errors, handleChange, ...props}) =>
  <>
    <Input placeholder={placeholder || name} 
      value={values[name]} 
      style={errors[name] && {borderWidth:2, borderColor:'red'}}
      onChangeText={handleChange(name)}
      {...props}
    />
    {errors[name] && <Per>{errors[name]}</Per>}
  </>

const SigninForm = ({handleSubmit, dirty, isValid, ...props}) =>
    <Div color='bg3rd' style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
      <P fontSize='h2' >Sign in</P>
      <FormikInput {...{name:'userName', placeholder:'user name', ...props}} />
      <FormikInput secureTextEntry {...{name:'password', ...props}} />
      <Button title='Sign in' onPress={handleSubmit} disabled={!dirty || !isValid} />
    </Div>

const SignIn = () => 
  <Formik initialValues={initialValues} onSubmit={submitForm} validationSchema = {validationYupSchema}>
    { (props) => <SigninForm {...props} /> }
  </Formik>

export default SignIn;

/**
  const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};
 */