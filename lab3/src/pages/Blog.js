import React from "react";
import '../style.css';

const Blog = () => {
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


        <div class="page-title" style="background-image: url(../moto/img/slider/5.png)">
            <h1>Posts</h1>
        </div>
        
        <section id="blog">

            <div class="blog container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="blog-item">
                            <a href="#"><img class="img-responsive img-blog" src="images/blog1.png" width="100%" alt="" /></a>
                            <div class="blog-content">
                                <h2><a href="blog-item.html">Consequat bibendum quam liquam viverra</a></h2>
                                <h3>Curabitur quis libero leo, pharetra mattis eros. Praesent consequat libero eget dolor convallis vel rhoncus magna scelerisque. Donec nisl ante, elementum eget posuere a, consectetur a metus. Proin a adipiscing sapien. Suspendisse vehicula porta lectus vel semper. Nullam sapien elit, lacinia eu tristique non.posuere at mi. Morbi at turpis id urna ullamcorper ullamcorper.</h3>
                                <a class="readmore" href="blog-item.html">Read More <i class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="blog-item">
                            <a href="#"><img class="img-responsive img-blog" src="images/blog2.png" width="100%" alt="" /></a>
                            <div class="blog-content">
                                <h2><a href="blog-item.html">Consequat bibendum quam liquam viverra</a></h2>
                                <h3>Curabitur quis libero leo, pharetra mattis eros. Praesent consequat libero eget dolor convallis vel rhoncus magna scelerisque. Donec nisl ante, elementum eget posuere a, consectetur a metus. Proin a adipiscing sapien. Suspendisse vehicula porta lectus vel semper. Nullam sapien elit, lacinia eu tristique non.posuere at mi. Morbi at turpis id urna ullamcorper ullamcorper.</h3>
                                <a class="readmore" href="blog-item.html">Read More <i class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="blog-item">
                            <a href="#"><img class="img-responsive img-blog" src="images/blog3.png" width="100%" alt="" /></a>
                            <div class="blog-content">
                                <h2><a href="blog-item.html">Consequat bibendum quam liquam viverra</a></h2>
                                <h3>Curabitur quis libero leo, pharetra mattis eros. Praesent consequat libero eget dolor convallis vel rhoncus magna scelerisque. Donec nisl ante, elementum eget posuere a, consectetur a metus. Proin a adipiscing sapien. Suspendisse vehicula porta lectus vel semper. Nullam sapien elit, lacinia eu tristique non.posuere at mi. Morbi at turpis id urna ullamcorper ullamcorper.</h3>
                                <a class="readmore" href="blog-item.html">Read More <i class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="blog-item">
                            <a href="#"><img class="img-responsive img-blog" src="images/blog3.png" width="100%" alt="" /></a>
                            <div class="blog-content">
                                <h2><a href="blog-item.html">Consequat bibendum quam liquam viverra</a></h2>
                                <h3>Curabitur quis libero leo, pharetra mattis eros. Praesent consequat libero eget dolor convallis vel rhoncus magna scelerisque. Donec nisl ante, elementum eget posuere a, consectetur a metus. Proin a adipiscing sapien. Suspendisse vehicula porta lectus vel semper. Nullam sapien elit, lacinia eu tristique non.posuere at mi. Morbi at turpis id urna ullamcorper ullamcorper.</h3>
                                <a class="readmore" href="blog-item.html">Read More <i class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="blog-item">
                            <a href="#"><img class="img-responsive img-blog" src="images/blog3.png" width="100%" alt="" /></a>
                            <div class="blog-content">
                                <h2><a href="blog-item.html">Consequat bibendum quam liquam viverra</a></h2>
                                <h3>Curabitur quis libero leo, pharetra mattis eros. Praesent consequat libero eget dolor convallis vel rhoncus magna scelerisque. Donec nisl ante, elementum eget posuere a, consectetur a metus. Proin a adipiscing sapien. Suspendisse vehicula porta lectus vel semper. Nullam sapien elit, lacinia eu tristique non.posuere at mi. Morbi at turpis id urna ullamcorper ullamcorper.</h3>
                                <a class="readmore" href="blog-item.html">Read More <i class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="blog-item">
                            <a href="#"><img class="img-responsive img-blog" src="images/blog3.png" width="100%" alt="" /></a>
                            <div class="blog-content">
                                <h2><a href="blog-item.html">Consequat bibendum quam liquam viverra</a></h2>
                                <h3>Curabitur quis libero leo, pharetra mattis eros. Praesent consequat libero eget dolor convallis vel rhoncus magna scelerisque. Donec nisl ante, elementum eget posuere a, consectetur a metus. Proin a adipiscing sapien. Suspendisse vehicula porta lectus vel semper. Nullam sapien elit, lacinia eu tristique non.posuere at mi. Morbi at turpis id urna ullamcorper ullamcorper.</h3>
                                <a class="readmore" href="blog-item.html">Read More <i class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="blog-item">
                            <a href="#"><img class="img-responsive img-blog" src="images/blog3.png" width="100%" alt="" /></a>
                            <div class="blog-content">
                                <h2><a href="blog-item.html">Consequat bibendum quam liquam viverra</a></h2>
                                <h3>Curabitur quis libero leo, pharetra mattis eros. Praesent consequat libero eget dolor convallis vel rhoncus magna scelerisque. Donec nisl ante, elementum eget posuere a, consectetur a metus. Proin a adipiscing sapien. Suspendisse vehicula porta lectus vel semper. Nullam sapien elit, lacinia eu tristique non.posuere at mi. Morbi at turpis id urna ullamcorper ullamcorper.</h3>
                                <a class="readmore" href="blog-item.html">Read More <i class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                        
                    </div>

                    <aside class="col-md-4">
                        <div class="widget search">
                            <form role="form">
                                <input type="text" class="form-control search_box" autocomplete="off" placeholder="Search Here"/>
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                        

                        <div class="widget archieve">
                            <h3>Categories</h3>
                            <div class="row">
                                <div class="col-sm-12">
                                    <ul class="blog_archieve">
                                        <li><a href="#">December 2013 <span class="pull-right">(97)</span></a></li>
                                        <li><a href="#">November 2013 <span class="pull-right">(32)</span></a></li>
                                        <li><a href="#">October 2013 <span class="pull-right">(19)</span></a></li>
                                        <li><a href="#">September 2013 <span class="pull-right">(08)</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="widget popular_post">
                            <h3>Popular Post</h3>
                            <ul>
                                <li>
                                    <a href="#">
                                        <img src="images/post1.png" alt=""/>
                                        <p>Can you get free games for you</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/post2.png" alt=""/>
                                        <p>Can you get free games for you</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/post3.png" alt=""/>
                                        <p>Can you get free games for you</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        

                        <div class="widget blog_gallery">
                            <h3>Our Gallery</h3>
                            <ul class="sidebar-gallery clearfix">
                                <li>
                                    <a href="#"><img src="images/sidebar-g-1.png" alt="" /></a>
                                </li>
                                <li>
                                    <a href="#"><img src="images/sidebar-g-2.png" alt="" /></a>
                                </li>
                                <li>
                                    <a href="#"><img src="images/sidebar-g-3.png" alt="" /></a>
                                </li>
                                <li>
                                    <a href="#"><img src="images/sidebar-g-4.png" alt="" /></a>
                                </li>
                                <li>
                                    <a href="#"><img src="images/sidebar-g-5.png" alt="" /></a>
                                </li>
                                <li>
                                    <a href="#"><img src="images/sidebar-g-6.png" alt="" /></a>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="widget social_icon">
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-twitter"></a>
                            <a href="#" class="fa fa-linkedin"></a>
                            <a href="#" class="fa fa-pinterest"></a>
                            <a href="#" class="fa fa-github"></a>
                        </div>
                        
                    </aside>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <ul class="pagination pagination-lg">
                            <li><a href="#"><i class="fa fa-long-arrow-left"></i></a></li>
                            <li class="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#"><i class="fa fa-long-arrow-right"></i></a></li>
                        </ul>
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

export default Blog;