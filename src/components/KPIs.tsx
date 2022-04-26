import { Typography } from "@apex-ui/core/Typography";
import { KPI } from "@apex-ui/core/KPI";
import { Theme } from "@apex-ui/core/theme";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        "& > *": {
            maxWidth: 250,
            marginBottom: theme.spacing(2),
        },
    },
}));

export default function KPIs() {
    const classes = useStyles();
    return <div className={classes.root}>
        <KPI 
            title={"Total Savings"}
            value={<Typography variant="mdHead" style={{ color: "green" }}>$10.00K</Typography>}
            elevation={2}
        />
    </div>
}