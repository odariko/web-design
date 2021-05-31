import React from "react";
import {useHistory} from 'react-router-dom';
import '../style.css';

const MainPage = () => {
  const history = useHistory();

  const handleRedirect = (url) => () => {
    if(url) {
      history.push(url);
    }
  }

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


		<div class="hero-area slider-1" id="slider-area">
			<div class="slider">
				<div class="container">
					<div class="row">
						<div class="col-md-offset-4 col-sm-offset-4 col-md-8">
							<div class="hero-text mr-ri-l">
								<h1>Game blog</h1>
								<p>Here you will find screenshots and games reviews from girls to girls and here you can participate in pleasant discussions where cookies are distributed (but this is not certain)</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


		<section id="about" class="about-area pt-130">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="about-content">
							<h2>About Blog</h2>
							<p>Multi-format blog that digs behind the headlines, often offering posts that are as interesting to people in the games industry as to gamers. A difficult line to walk, but it manages it with aplomb. A clean design and clear writing makes it a refreshing read.</p>
							<a href="#" class="hero-btn video-popup" class="" href="https://www.youtube.com/watch?v=BzMLA8YIgG0"><i class="icofont icofont-play-alt-2"></i> Watch Our Video</a>
						</div>
					</div>
					<div class="col-md-6">
						<div class="about-img">
							<img src="img/other/about.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	

		<section id = "recent" class="screenshot-area pt-130 pb-130">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="section-heading pb-55 text-center">
							<h2>Recent</h2>
							<p>Here you can find images of resent blog posts and and the brightest comments</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 col-xs-12">
						<div class="screenshot-slider">
							<div class="single-screenshot">
								<div class="image">
									<img src="img/screenshot/1.png" alt=""/>
								</div>
							</div>
							<div class="single-screenshot">
								<div class="image">
									<img src="img/screenshot/2.png" alt=""/>
								</div>
							</div>
							<div class="single-screenshot">
								<div class="image">
									<img src="img/screenshot/3.png" alt=""/>
								</div>
							</div>
							<div class="single-screenshot">
								<div class="image">
									<img src="img/screenshot/4.png" alt=""/>
								</div>
							</div>
							<div class="single-screenshot">
								<div class="image">
									<img src="img/screenshot/5.png" alt=""/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		
		<section id="subcribe" class="subcribe-area pt-130 pb-115 bg-6">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="subcribe-form text-center">
							<form id="mc-form">
								<input autocomplete="off" placeholder="Enter Your Email" type="text"/>
								<button type="submit">Subscribe</button>
								<div class="mailchimp-alerts text-centre">
									<div class="mailchimp-submitting"></div>
									<div class="mailchimp-success"></div>
									<div class="mailchimp-error"></div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>


		<div class="copyright-area bg-7 ptb-70">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="copyright-area text-center">
							<div class="contact-social text-center pt-70 pb-35">
								<ul>
									<li>
										<a href="#"><i class="icofont icofont-social-facebook"></i></a>
									</li>
									<li>
										<a href="#"><i class="icofont icofont-social-twitter"></i></a>
									</li>
									<li>
										<a href="#"><i class="icofont icofont-social-pinterest"></i></a>
									</li>
									<li>
										<a href="#"><i class="icofont icofont-social-vimeo"></i></a>
									</li>
									<li>
										<a href="#"><i class="icofont icofont-social-google-plus"></i></a>
									</li>
								</ul>
							</div>
							<div class="copyright-text">
								<p>Copyright &copy;  <a href="https://gameblogmy.com/"> Game Blog. </a> All Rights Reserved.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
    </>
  )
};

export default MainPage;