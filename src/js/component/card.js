import React, { Component } from "react";
import PropTypes from "prop-types";

export const Card = props => (
	<div className="card mb-3" style={{ width: "16rem" }}>
		<img
			className="card-img-top"
			src="https://cdn.pixabay.com/photo/2015/08/28/14/54/lagoon-911963__180.jpg"
			alt="Card image cap"
		/>
		<div className="card-body d-flex flex-column align-items-center">
			<h5 className="card-title">{props.title}</h5>
			<p className="card-text">
				Some quick example text to build on the card title and make up the bulk of the cards content.
			</p>
		</div>
		<div className="card-footer d-flex flex-column align-items-center">
			<a href="#" className="btn btn-primary">
				Find Out More!
			</a>
		</div>
	</div>
);

Card.propTypes = {
	url: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
	link: PropTypes.string
};

//Definir proptypes