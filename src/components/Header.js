import React, { Component } from 'react'

class Header extends Component {

	render(){
		return (
			<section id="sidebar">
			<img className="logo" src="images/logo-rocket-team.png" alt="" />
				<div className="inner">
					<nav>
						<ul>
							<li><a href="#intro">Welcome</a></li>
							<li><a href="#one">Who we are</a></li>
							<li><a href="#two">What we do</a></li>
							<li><a href="#three">Get in touch</a></li>
						</ul>
					</nav>
				</div>
			</section>
		)
	}
}    

export default Header	


