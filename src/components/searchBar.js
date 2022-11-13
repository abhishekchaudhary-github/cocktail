import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function BasicCard() {
  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        marginLeft: "35rem",
        marginRight: "100rem",
        marginTop: "2rem",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          Search the cocktail
        </Typography>
      </CardContent>
      <CardActions>
        <Stack
          component="form"
          sx={{
            width: "25ch",
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue=""
            variant="filled"
            style={{ paddingLeft: "3rem" }}
          />
        </Stack>
      </CardActions>
    </Card>
  );
}
