import './App.css';
import React from 'react';
import ApexChart from "./component/ApexChart";
import ApexHorizontalBarChart from "./component/ApexHorizontalBarChart";
import TransactionHistoryGraph from "./component/TransactionHistoryGraph";
import NetworkGraph from "./component/NetworkGraph";

const dummyData = {
    nodes: [
        { id: 'Node 1', label: 'id1', group: 'Group 1' },
        { id: 'Node 2', label: 'id2', group: 'Group 1' },
        { id: 'Node 3', label: 'id3', group: 'Group 2' },
        { id: 'Node 4', label: 'id4', group: 'Group 2' },
        { id: 'Node 5', label: 'id5', group: 'Group 2' },
        { id: 'Node 6', label: 'id6', group: 'Group 3' },
        { id: 'Node 7', label: 'id7', group: 'Group 3' },
        { id: 'Node 8', label: 'id8', group: 'Group 4' },
        { id: 'Node 9', label: 'id9', group: 'Group 4' },

    ],
    links: [
        { source: 'Node 1', target: 'Node 2', weight: 5, count: 2 ,label: 'Lbl 1'},
        { source: 'Node 1', target: 'Node 3', weight: 3, count: 1, label: 'Lbl 2' },
        { source: 'Node 1', target: 'Node 4', weight: 3, count: 1 , label: 'Lbl 3'},
        { source: 'Node 1', target: 'Node 5', weight: 3, count: 1 , label: 'Lbl 4' },
        { source: 'Node 9', target: 'Node 6', weight: 3, count: 1 , label: 'Lbl 5'},
        { source: 'Node 6', target: 'Node 7', weight: 3, count: 1 , label: 'Lbl 6'},
        { source: 'Node 3', target: 'Node 8', weight: 3, count: 1 , label: 'Lbl 7'},
        { source: 'Node 8', target: 'Node 9', weight: 3, count: 1 , label: 'Lbl 8'},
        { source: 'Node 5', target: 'Node 9', weight: 3, count: 1 , label: 'Lbl 9'},

    ],
};


const App = () => {

    return (
        <div className="app">
            <NetworkGraph data={dummyData} width={600} height={400}/>

            {/*<div className="app" style={{ display: "flex", flexDirection: "row" }}>*/}
            {/*    <div className="row" style={{ marginRight: "20px" }}>*/}
            {/*        <div className="mixed-chart">*/}
            {/*            <h1 style={{ marginLeft: "20px" }}>Historical Number of Alerts</h1>*/}
            {/*            <ApexChart />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="row" style={{ marginRight: "20px" }}>*/}
            {/*        <div className="mixed-chart">*/}
            {/*            <h1 style={{ marginLeft: "20px" }}>Workload per user</h1>*/}
            {/*            <ApexHorizontalBarChart />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="row" style={{ marginRight: "20px" }}>*/}
            {/*    <div className="mixed-chart">*/}
            {/*        <h1 style={{ marginLeft: "20px" }}>Workload per user</h1>*/}
            {/*        <TransactionHistoryGraph/>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
};

export default App;
