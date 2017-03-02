import React, {Component} from 'react';
import timezones from './timezones';
import map from 'lodash/map';
// import validateInput from './signupvalid';
import classnames from 'classnames';

///////////////////////////////////////////////////////////////////////////////////////
class Signupform extends Component{
////////////////////////////////////////////////////////////////////////////////
constructor(props){
    super(props)
    this.state = {
        username: '',
        email: '',
        password: '',
        passwordconfirmation: '',
        timezone: '',
    //     errors: {},
    //    isLoading: false,
    //    invalid: false
        

     } 
     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
    //  this.checkUserExists = this.checkUserExists.bind(this);
}
////////////////////////////////////////////////////////////////////////////////////////
onChange(e){
   this.setState({ [e.target.name] : e.target.value});
}
///////////////////////////////////////////////////////////////////////////////
// isValid() {
//     const { errors, isValid } = validateInput(this.state);

//     if (!isValid) {
//       this.setState({ errors });
//     }

//     return isValid;
//   }
///////////////////////////////////////////////////////////////////////
//  checkUserExists(e) {
//     const field = e.target.name;
//     const val = e.target.value;
//     if (val !== '') {
//       this.props.isUserExists(val).then(res => {
//         let errors = this.state.errors;
//         let invalid;
//         if (res.data.user) {
//           errors[field] = 'There is user with such ' + field;
//           invalid = true;
//         } else {
//           errors[field] = '';
//           invalid = false;
//         }
//         this.setState({ errors, invalid });
//       });
//     }
//   }
/////////////////////////////////////////////////////////////////////////
onSubmit(e){
e.preventDefault();
console.log(this.state);
// axios.post('/api/user',{user: this.state})
//  if (this.isValid()) {
//       this.setState({ errors: {}, isLoading: true });
//       this.props.userSignupRequest(this.state).then(
//         () => {
//           this.props.addFlashMessage({
//             type: 'success',
//             text: 'You signed up successfully. Welcome!'
//           });
//           this.context.router.push('/');
//         },
//         (err) => this.setState({ errors: err.response.data, isLoading: false })
//       );
//     }

}
//////////////////////////////////////////////////////////
render(){
//  const { errors } = this.state;
const options = map(timezones, (val, key) =>
<option key={val} value={val}>{key}</option>
);

    return(
<form  className='col s12' onSubmit={this.onSubmit}>
<h1>Welcome To React Home</h1>

<div className='form-group input-field col s4'>
<label className='control-label'>User Name</label>
<input 
//error={errors.username}
value={this.state.username}
//checkUserExists={this.checkUserExists}
onChange={this.onChange}
type="text"
name='username'
className='form-control validate'/>
</div>

<div className='form-group input-field col s4'>
<label className='control-label'>Email</label>
<input 
// error={errors.email}
value={this.state.email}
//checkUserExists={this.checkUserExists}
onChange={this.onChange}
type="text"
name='email'
className='form-control validate'/>
</div>

<div className='form-group input-field col s4'>
<label className='control-label'>Password</label>
<input 
//error={errors.password}
value={this.state.password}
onChange={this.onChange}
type="password"
name='password'
className='form-control validate'/>
</div>

<div className='form-group input-field col s4'>
<label className='control-label'>Confirm Password</label>
<input 
//error={errors.passwordConfirmation}
value={this.state.passwordconfirmation}
onChange={this.onChange}
type="password"
name='passwordconfirmation'
className='form-control validate'/>
</div>

<div className='form-group input-field col s12'>
<label >Timezones</label>
<select 
className='form-control icons'
name="timezone" 
onChange={this.onChange}
value={this.state.timezone}
>
<option  value="" disabled >Choose your Timezones</option>
{options}
</select>
{/*{errors.timezone && <span className="help-block">{errors.timezone}</span>}*/}
</div>

<div className='form-group'>
    <button className='btn btn-primary btn-lg'>Sign Up</button>
</div>
</form>
    )
}    
}



export default Signupform;