import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  parallax: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    backgroundAttachment: "fixed",
    [theme.breakpoints.down("md")]: {
      backgroundAttachment: "scroll"
    },
    backgroundSize: "cover",
    backgroundPosition: "center",
    flexDirection: "column",
    textAlign: "center"
  },
  heroBtn: {
    display: "flex",
    justifyContent: "center"
  },
  invertedBtn: {
    color: "#fff",
    backgroundColor: "transparent",
    border: "2px #fff solid",
    boxShadow: "none"
  },
  white: {
    color: "#fff"
  }
});

class Hero extends Component {
  render() {
    const {
      classes,
      titleText,
      subtitleText,
      primaryBtnText,
      primaryBtnLink
    } = this.props;

    const Title = (
      <Typography variant="display2" className={classes.white} gutterBottom>
        {titleText}
      </Typography>
    );

    const Subtitle = (
      <Typography
        className={classes.white}
        variant="subheading"
        style={{ fontWeight: 500, fontSize: "22px", marginBottom: "1.35em" }}
        gutterBottom
      >
        {subtitleText}
      </Typography>
    );

    const PrimaryBtn = (
      <Grid item className={classes.heroBtn} xs={12}>
        <Button
          href={primaryBtnLink}
          title={primaryBtnText}
          className={classes.invertedBtn}
          color="`secon`dary"
          style={{ width: "192px" }}
        >
          {primaryBtnText}
        </Button>
      </Grid>
    );
    return (
      <div
        className={classes.parallax}
        style={{
          backgroundImage: `linear-gradient(rgb(148, 132, 223), rgba(13, 97, 146, 0.89))`,
          minHeight: "100vh"
        }}
      >
        {titleText && Title}
        {subtitleText && Subtitle}

        {primaryBtnText ? (
          <Grid container style={{ width: "100%" }} spacing={16}>
            {primaryBtnText && primaryBtnLink ? PrimaryBtn : null}
          </Grid>
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles)(Hero);
