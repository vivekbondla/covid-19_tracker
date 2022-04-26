import { Card, CardContent, Typography } from "@mui/material";

const InfoBox = (props) => {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {props.title}
        </Typography>
        <h2 className="infoBox__cases">{props.cases}</h2>
        <Typography className="infoBox__title" color="textSecondary">
          {props.total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};
export default InfoBox;
