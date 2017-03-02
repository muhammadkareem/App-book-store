import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
 onSubmit(e) {
    e.preventDefault();
   console.log(this.state)
  }

  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
  

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>

        <div className='form-group'>
<label className='control-label'>User Name</label>
<input 
value={this.state.identifier}
onChange={this.onChange}
type="text"
name='identifier'
className='form-control input-field col s4'/>
</div>


<div className='form-group'>
<label className='control-label'>Password</label>
<input 
//error={errors.password}
value={this.state.password}
onChange={this.onChange}
type="password"
name='password'
className='form-control input-field col s4'/>
</div>

<div className="form-group"><button className="btn btn-primary btn-lg" >Login</button></div>
      </form>
    );
  }
}


export default LoginForm