import React, { Component } from 'react'

class Section extends Component {

	render(){
		return (

	<section id="intro" className="wrapper style1 fullscreen fade-up">
		<div className="inner">
		<img className="rocket" src="images/rocket-team.png" alt="" />
		<img className="rocket-sun" src="images/sun.png" alt="" />
			<h1>Rocket-Team</h1>
			<h2>Web Design and More...</h2>
			<p>Interactive agency that developes the best user experience for online</p>
			<ul className="actions">
				<li><a href="#one" className="button scrolly">Learn more</a></li>
			</ul>
		</div>
	</section>

		)
	}
}    

export default Section