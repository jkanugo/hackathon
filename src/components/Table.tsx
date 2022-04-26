import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"

export default function Table() {

    const rowData = [{
        id: 1,
        task: "pipeline-dbr",
        state: "Completed",
        runOn: "GCP",
        runTime: "5hrs",
        spotPrice: "0.10$/hr",
        ec2: "0.20$/hr",
        gce: "0.10$/hr",
        saving: "$0.5"

    },{
        id: 2,
        task: "Process Cost Information",
        state: "Completed",
        runOn: "AWS",
        runTime: "3hrs",
        spotPrice: "0.20$/hr",
        ec2: "0.20$/hr",
        gce: "0.30$/hr",
        saving: "$0.3"

    },
    {
        id: 3,
        task: "Process Trump Tweets",
        state: "Completed",
        runOn: "AWS",
        runTime: "60hrs",
        spotPrice: "0.25$/hr",
        ec2: "0.25$/hr",
        gce: "0.29$/hr",
        saving: "$1.6"

    },
    {
        id: 4,
        task: "Process Elons Tweets",
        state: "Pending",
        runOn: "-",
        spotPrice: "-",
        ec2: "-",
        gce: "-",
        saving: "-"

    },
    {
        id: 5,
        task: "Run a DDOS",
        state: "Pending",
        runOn: "-",
        spotPrice: "-",
        ec2: "-",
        gce: "-",
        saving: "-"

    }
    ];
    const columnDefs: ColDef[] = [{
        field: "id",
    },
    {
        field: "task",
    },
    {
        field: "state",
    },{
        field: "runOn"
    }, {
        field: "runTime"
    },{
        field: "spotPrice"
    }, {
        field: "ec2"
    }, {
        field: "gce"
    }, {
        field: "saving"
    }];



    return <div className="ag-theme-alpine" style={{ marginTop: "20px", height: "650px" }}>
        <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
        ></AgGridReact>
    </div>
}