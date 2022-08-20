import React from 'react'
import LoginButtons from './LoginButtons';

export default function SignIn({ providers }) {
    return (
        <>
            <div className="container mb-5">
                <div className="col-md-6 mx-auto text-center">
                    <div className="header-title">
                        <h1 className="wv-heading--title">
                           Signup and Signin with Social Media
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="myform form ">
                          <LoginButtons providers={providers} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}