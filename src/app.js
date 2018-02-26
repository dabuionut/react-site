import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Footer, Section, Header, Sun, Hills, Introduction } from './components'

class App extends Component {

	render(){
		return (

<div>

			<Header />

			<div id="wrapper">

				<Section />

					<section id="one" className="wrapper style2 spotlights">
						<section>
							<a href="#" className="image"><img src="images/img1.jpg" alt="" data-position="center center" /></a>
							<div className="content">
								<div className="inner">
									<h2>Our Story</h2>
									<p>We came alive in 2012 with a lots of hopes and dreams to bring something new and fresh for the online industry</p>
									<ul className="actions">
										<li><a href="#" className="button">Learn more</a></li>
									</ul>
								</div>
							</div>
						</section>
						<section>
							<a href="#" className="image"><img src="images/img2.jpg" alt="" data-position="top center" /></a>
							<div className="content">
								<div className="inner">
									<h2>Work</h2>
									<p>We create beautiful websites and applications for our clients with a touch of inspiration and user experience </p>
									<ul className="actions">
										<li><a href="#" className="button">Learn more</a></li>
									</ul>
								</div>
							</div>
						</section>
						<section>
							<a href="#" className="image"><img src="images/img3.jpg" alt="" data-position="25% 25%" /></a>
							<div className="content">
								<div className="inner">
									<h2>Fun</h2>
									<p>We are having fun working hard on different projects.</p>
									<ul className="actions">
										<li><a href="#" className="button">Learn more</a></li>
									</ul>
								</div>
							</div>
						</section>
					</section>


					<section id="two" className="wrapper style3 fade-up">
						<div className="inner">
							<h2>What we do</h2>
							<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
							<div className="features">
								<section>
									<span className="icon major fa-code"></span>
									<h3>Rocket-Team</h3>
									<p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
								</section>
								<section>
									<span className="icon major fa-lock"></span>
									<h3>Rocket-Team</h3>
									<p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
								</section>
								<section>
									<span className="icon major fa-cog"></span>
									<h3>Rocket-Team</h3>
									<p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
								</section>
								<section>
									<span className="icon major fa-desktop"></span>
									<h3>Rocket-Team</h3>
									<p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
								</section>
								<section>
									<span className="icon major fa-chain"></span>
									<h3>Rocket-Team</h3>
									<p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
								</section>
								<section>
									<span className="icon major fa-diamond"></span>
									<h3>Rocket-Team</h3>
									<p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
								</section>
							</div>
							<ul className="actions">
								<li><a href="#" className="button">Learn more</a></li>
							</ul>
						</div>
					</section>

					<section id="three" className="wrapper style1 fade-up">
						<div className="inner">
							<h2>Get in touch</h2>
							<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
							<div className="split style1">
								<section>
									<form method="post" action="#">
										<div className="field half first">
											<label htmlFor="name">Name</label>
											<input type="text" name="name" id="name" />
										</div>
										<div className="field half">
											<label htmlFor="email">Email</label>
											<input type="text" name="email" id="email" />
										</div>
										<div className="field">
											<label htmlFor="message">Message</label>
											<textarea name="message" id="message" rows="5"></textarea>
										</div>
										<ul className="actions">
											<li><a href="" className="button submit">Send Message</a></li>
										</ul>
									</form>
								</section>
								<section>
									<ul className="contact">
										<li>
											<h3>Address</h3>
											<span>Giurgeni Street<br />
											RO - Bucharest</span>
										</li>
										<li>
											<h3>Email</h3>
											<a href="#">office@rocket-team.ro</a>
										</li>
										<li>
											<h3>Phone</h3>
											<span>(+40) 0728-124-382</span>
										</li>
										<li>
											<h3>Social</h3>
											<ul className="icons">
												<li><a href="#" className="fa-twitter"><span className="label">Twitter</span></a></li>
												<li><a href="#" className="fa-facebook"><span className="label">Facebook</span></a></li>
												<li><a href="#" className="fa-github"><span className="label">GitHub</span></a></li>
												<li><a href="#" className="fa-instagram"><span className="label">Instagram</span></a></li>
												<li><a href="#" className="fa-linkedin"><span className="label">LinkedIn</span></a></li>
											</ul>
										</li>
									</ul>
								</section>
							</div>
						</div>
					</section>

			</div>

			<Footer />
</div>

		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))