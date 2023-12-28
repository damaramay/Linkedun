export default function Login() {
    return (
        <>
            <div id="Login-Container" className="Login-Container">
                <div id="nav-login" className="nav-login">
                    <a href="/">
                        <img src="/images/login-logo.svg" alt="" />
                    </a>
                    <div id="Login-or-signUp" className="Login-or-signUp">
                        <div id="Join-Login" className="Join-Login">Join now</div>
                        <div id="SignIn-Login" className="SignIn-Login">Sign in</div>
                    </div>
                </div>
                <div id="Section-Login" className="Section-Login">
                    <div id="Hero" className="Hero">
                        <h1>Welcome to your professional community</h1>
                        <form action="">
                            <div className="Input-Login-SignUp">
                                <label htmlFor="Username">
                                    Email or Phone
                                </label>
                                <input type="text" name="username" id="username" placeholder="" />
                            
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password" placeholder="" />
                                
                                <div class="forgot">
                                    <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                                </div>
                            </div>
                           
                        </form>
                        <img src="/images/login-hero.svg" alt="" />
                    </div>
                    <div id="Form-Login" className="Form-Login">
                        <div id="Google" className="Google">
                            <img src="/images/google.svg" alt="" />
                            Sign in with Google
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}