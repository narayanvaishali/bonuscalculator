import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import Layout from "../components/Layout";

import { getBranches } from "../utils/branchUtils";
import { bonusCalculator } from "../utils/bonusCalculator";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    padding: "80px"
  },
  formControl: {
    marginBottom: theme.spacing.unit * 2
  },
  floatRight: {
    textAlign: "right"
  }
});

class BonusCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: 0,
      noOfShift: 0,
      grossProfit: 0,
      branch: "",
      branches: [],
      bonus: 0,
      msg: undefined
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCalculateBonus = this.handleCalculateBonus.bind(this);
    this.handleBranchSelect = this.handleBranchSelect.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.handleCalculateBonus();
  }

  handleBranchSelect(e) {
    const { branches } = this.state;
    const branch = branches.find(b => b.key === e.target.value);

    const { noOfShift, grossProfit } = this.state;

    bonusCalculator(branch.target, noOfShift, grossProfit, (errMsg, bonus) => {
      if (errMsg) {
        this.setState({
          bonus: bonus,
          msg: errMsg,
          branch: branch.key,
          target: branch.target
        });
        return;
      }
      this.setState({
        bonus: bonus,
        msg: undefined,
        branch: branch.key,
        target: branch.target
      });
    });
  }

  handleCalculateBonus() {
    const { target, noOfShift, grossProfit } = this.state;
    bonusCalculator(target, noOfShift, grossProfit, (errMsg, bonus) => {
      if (errMsg) {
        this.setState({ bonus: bonus, msg: errMsg });
        return;
      }

      this.setState({
        bonus: bonus,
        msg: undefined
      });
    });
  }

  componentDidMount() {
    getBranches(list => this.setState({ branches: list }));
  }

  render() {
    const { classes } = this.props;
    return (
      <Layout drawer={true} routerHistory={this.props.history}>
        <Typography variant="display1">Bonus Calculator</Typography>

        <Paper className={classes.root}>
          {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}

          <form>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="branch">Branch</InputLabel>
              <Select
                value={this.state.branch}
                onChange={this.handleBranchSelect}
                inputProps={{
                  name: "branch",
                  id: "branch"
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {this.state.branches.map(b => (
                  <MenuItem key={b.key} value={b.key}>
                    {b.branchname}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="target">Target</InputLabel>
              <Input
                inputProps={{
                  name: "target",
                  id: "target"
                }}
                value={this.state.target}
                type="number"
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="noOfShift">No of Shift</InputLabel>
              <Input
                inputProps={{
                  name: "noOfShift",
                  id: "noOfShift"
                }}
                value={this.state.noOfShift}
                type="number"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="grossProfit">
                Gross Profit (&pound;)
              </InputLabel>
              <Input
                inputProps={{
                  name: "grossProfit",
                  id: "grossProfit"
                }}
                value={this.state.grossProfit}
                type="number"
                onChange={this.handleChange}
              />
            </FormControl>
          </form>
        </Paper>

        <Paper className={classes.root}>
          {this.state.msg ? (
            <Typography variant="display3">{this.state.msg}</Typography>
          ) : null}
          {this.state.bonus ? (
            <Typography variant="display3">
              Bonus: &pound;{this.state.bonus}
            </Typography>
          ) : null}
        </Paper>
      </Layout>
    );
  }
}

export default withStyles(styles)(BonusCalculator);
