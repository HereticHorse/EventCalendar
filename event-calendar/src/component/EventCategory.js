import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class EventCategory extends React.Component {
	render() {
		const nameinfo = { name: "aaa", model: "Mus3333tang" };
		return (
			<div>
				<Grid lg={2} md={4} xs={4}>
					<p>date choice {this.props.brand.name} </p>
				</Grid>
			</div>
		);
	}
}

export default EventCategory;
