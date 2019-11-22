import React, { Component } from "react";
import Calendar from "react-calendar";
import { Grid, Button } from "@material-ui/core";

export default class CalendarComponent extends Component {
	state = {
		date: new Date(),
		showDate: false
	};
	onChange = (date) => this.setState({ date: date });

	validation = () => {
		this.setState({
			showDate: true
		});
	};

	rese = () => {
		this.setState({
			showDate: false
		});
	};

	render() {
		return (
			<div>
				<Grid justify="center" alignItems="center">
					<div onClick={this.reset}>
						<Calendar
							display="flex"
							justify-content="center"
							onChange={this.onChange}
							value={this.state.date}
							selectRange={true}
						/>
					</div>
				</Grid>

				<Button onClick={this.validation}>Validation</Button>
				{/* <p>date choice {this.state.date.toLocaleDateString()}</p> */}
				{this.state.showDate ? (
					<div>
						<p>{this.state.date[0].toLocaleDateString()}</p>
						<p>{this.state.date[1].toLocaleDateString()}</p>
					</div>
				) : null}
			</div>
		);
	}
}
