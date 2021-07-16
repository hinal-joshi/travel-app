import React from 'react'

import './SignupForm.css'

function SignupForm() {
    return (
        <div className="signup-container">
            <div className="signup">
                <h2 className="signup-header">SIGN UP</h2>
                <form action="" className="signup-form">
                    <div className="signup-input">
                    <i class="fas fa-user"/>
                    <input type="text" name="name" id="" placeholder="Name" />
                    </div>
                    <div className="signup-input">
                    <i class="fas fa-envelope-open"/>
                    <input type="email" name="email" id="" placeholder="Email" />
                    </div>
                    <div className="signup-input">
                    <i class="fas fa-lock"/>
                    <input type="password" name="password" id="" placeholder="Passwords" />
                    </div>
                    <button className="signup-btn">SIGN UP<i class="fas fa-plus"></i></button>
                </form>
            </div>
        </div>
    )
}

export default SignupForm
