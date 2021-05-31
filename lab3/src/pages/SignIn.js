import React from "react";
import '../style.css';

const SignIn = () => {
  return(
    <>
        <header>
			<nav id="header-top" class="navbar">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation" aria-expanded="false">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="#"><img src="../moto/img/icon/logo2.png" alt="logo" class="img-responsive"/></a>
					</div>
					<div class="collapse navbar-collapse" id="navigation">
						<ul class="nav navbar-nav navbar-right">
                            <button onClick={handleRedirect('/blog')} className="router-link">Blog</button>
                            <button onClick={handleRedirect('/calculator')} className="router-link">Calculator</button>
                            <button onClick={handleRedirect('/signIn')} className="router-link">Sign in</button>
						</ul>
					</div>
				</div>
			</nav>
	    </header>

      <div class="limiter">
		<div class="container-login100" style="background-image: url('images/bg-01.jpg');">
			<div class="wrap-login100 p-t-30 p-b-50">
				<span class="login100-form-title p-b-41">
					Account Login
				</span>
				<form class="login100-form validate-form p-b-33 p-t-5">

					<div class="wrap-input100 validate-input" data-validate = "Enter Email">
						<input class="input100" type="inputEmail" id="inputEmail" name="inputEmail" placeholder="inputEmail"/>
						<span class="focus-input100" data-placeholder="&#xe82a;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="inputpassword" id="inputpassword" name="inputpassword" placeholder="inputpassword"/>
						<span class="focus-input100" data-placeholder="&#xe80f;"></span>
					</div>

					<div class="container-login100-form-btn m-t-32">
						<button class="login100-form-btn">
							Login
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>
    </>
  )
};

export default SignIn;