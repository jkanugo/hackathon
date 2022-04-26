import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import KPIs from './components/KPIs';
import { Button } from '@apex-ui/core/Button';
import { Plus } from '@apex-ui/icons/Plus';
import Table from './components/Table';
import { Card } from '@apex-ui/core/Card';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from "highcharts";
import { Dialog } from '@apex-ui/core/Dialog';
import { DialogTitle } from '@apex-ui/core/DialogTitle';
import { Typography } from '@apex-ui/core/Typography';
import { DialogContent } from '@apex-ui/core/DialogContent';
import { DialogActions } from '@apex-ui/core/DialogActions';
import { TextField } from '@apex-ui/core/TextField';
import { MenuItem } from '@apex-ui/core/MenuItem';
import { SelectField } from '@apex-ui/core/SelectField';

function App() {

  const getSeriesData = (requirement: string) => {
    const data: { [key: string]: any } = {
      "2vcpu_4gb":
        [{
          name: "ec2_c5.large",
          data: [0.0358, 0.0358, 0.0358, 0.0358, 0.0357, 0.0357, 0.0357, 0.0357, 0.0357, 0.0358, 0.0358, 0.0358],
        },
        {
          name: "gce_n1-highcpu-4",
          data: [0.0298312, 0.0298312, 0.0298312, 0.0298312, 0.0298312, 0.0298312, 0.0298312, 0.0298312, 0.0298312, 0.0298312, 0.0298312, 0.0298312],
        }],

      "4vcpu_8gb":
        [{
          name: "ec2_c4.xlarge",
          data: [0.0746, 0.0746, 0.0746, 0.0746, 0.0746, 0.0749, 0.0749, 0.0749, 0.0749, 0.0749, 0.075, 0.075],
        },
        {
          name: "gce_c2d-highcpu-4",
          data: [0.0360, 0.0360, 0.0360, 0.0360, 0.0360, 0.0360, 0.0360, 0.0360, 0.0360, 0.0360, 0.0360, 0.0360],
        }],

      "2vcpu_8gb":
        [{
          name: "ec2_m5.large",
          data: [0.0396, 0.0396, 0.0396, 0.0396, 0.0396, 0.0396, 0.0396, 0.0396, 0.0395, 0.0395, 0.0395, 0.0395],
        },
        {
          name: "gce_n2-standard-2",
          data: [0.02354, 0.02354, 0.02354, 0.02354, 0.02354, 0.02354, 0.02354, 0.02354, 0.02354, 0.02354, 0.02354, 0.02354],
        }],

      "4vcpu_16gb":
        [{
          name: "ec2_m5.xlarge",
          data: [0.0680, 0.0680, 0.0680, 0.0680, 0.0680, 0.0680, 0.0680, 0.0680, 0.0680, 0.0680, 0.0680, 0.0680],
        },
        {
          name: "gce_c2d-standard-4",
          data: [0.0436, 0.0436, 0.0436, 0.0436, 0.0436, 0.0436, 0.0436, 0.0436, 0.0436, 0.0436, 0.0436, 0.0436],
        }]
    }

    return data[requirement];
  }

  const [chartData, setChartData] = useState({
    title: {
      text: `Spot Instance Prices`
    },
    series: [{
      name: "ec2_c5.large",
      data: [0.0358, 0.0358, 0.0358, 0.0358, 0.0357, 0.0357, 0.0357, 0.0357, 0.0357, 0.0358, 0.0358, 0.0358],
    },
    {
      name: "gce_n1-highcpu-4",
      data: [0.0298312, 0.0298312, 0.0298312, 0.0298312, 0.0298312, 0.0298312, 0.0298312, 0.0298312, 0.0298312, 0.0298312, 0.0298312, 0.0298312],
    }]
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleClose = () => {
    setIsAddModalOpen(false);
  }

  const handleOpen = () => {
    setIsAddModalOpen(true);
  }

  const [selectValue, setSelectValue] = React.useState("2vcpu_4gb");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectValue(event.target.value);
  };

  useEffect(() => {
    setChartData((prevState) => ({
      ...prevState,
      series: getSeriesData(selectValue)
    }))
  }, [selectValue])

  return (
    <div>
      <Header />
      <KPIs />
      <div style={{ display: "flex", justifyContent: "space-between", margin: "10px 0px" }}>
        <SelectField style={{ width: "250px" }} value={selectValue} label="instance requirement" onChange={handleChange}>
          <MenuItem value={"2vcpu_4gb"}>2vcpu_4gb</MenuItem>
          <MenuItem value={"4vcpu_8gb"}>4vcpu_8gb</MenuItem>
          <MenuItem value={"2vcpu_8gb"}>2vcpu_8gb</MenuItem>
          <MenuItem value={"4vcpu_16gb"}>4vcpu_16gb</MenuItem>
        </SelectField>
        <Button startIcon={<Plus />} variant="contained" color="primary" onClick={handleOpen}>Add Task</Button>
      </div>
      <Card>
        <HighchartsReact highcharts={Highcharts} options={chartData} />
      </Card>
      <Table />
      <Dialog
        open={isAddModalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="mdHead">Add Task</Typography>
        </DialogTitle>
        <DialogContent style={{ width: "400px", margin: "10" }}>
          <div style={{ marginBottom: "10px" }}><TextField label='Task' style={{ width: "100%" }} /></div>
          <div style={{ marginBottom: "10px" }}><SelectField style={{ width: "100%" }} value={selectValue} label="instance requirement" onChange={handleChange}>
            <MenuItem value={"2vcpu_4gb"}>2vcpu_4gb</MenuItem>
            <MenuItem value={"4vcpu_8gb"}>4vcpu_8gb</MenuItem>
            <MenuItem value={"2vcpu_8gb"}>2vcpu_8gb</MenuItem>
            <MenuItem value={"4vcpu_16gb"}>4vcpu_16gb</MenuItem>
          </SelectField></div>

          <div style={{ marginBottom: "10px" }}><TextField label='Date & Time' style={{ width: "100%" }} /></div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Add
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
