import { Typography } from "@apex-ui/core/Typography";

function Header() {
    return <div style={{
        borderBottom: "1px solid lightgray",
        marginBottom: "10px"
    }}>
        <Typography style={{
            display: "flex",
            height: "100px",
            alignItems: "center"
        }}
            variant="lgHead"
            component="h2"
            gutterBottom={true}>
            Spot Saver
        </Typography>
    </div>
}

export default Header;