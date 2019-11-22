import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Appbar from "./component/Appbar";
import { Grid } from "@material-ui/core";
import EventCategory from "./component/EventCategory";
import CalendarComponent from "./component/CalendarComponent";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary
	}
}));
function App() {
	const classes = useStyles();
	const carinfo = { name: "Ford", model: "Mustang" };
	return (
		<div>
			<Appbar />
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={12} lg={12}>
						<Paper className={classes.paper}></Paper>
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<Paper className={classes.paper}>
							<CalendarComponent />
						</Paper>
					</Grid>
					<Grid item xs={8} md={8} lg={10}>
						<Paper className={classes.paper}>
							<EventCategory brand={carinfo} />
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default App;
