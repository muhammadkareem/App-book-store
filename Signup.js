import React, {Component} from 'react';
import Signupform from './Signupform';


class SignUpPage extends Component{
    render(){
        return(
<div className="row">
    <div className="col-md-4 col-md-offset-4">
<Signupform />
</div>
    </div>    
            
        );
    }
}

export default Signupform;