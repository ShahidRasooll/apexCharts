import './App.css';
import React from 'react';
import NetworkGraph from "./component/NetworkGraph";

const dummyData = {
    nodes: [
        {id: 'Node 1', label: 'id1', group: 'Group 1'},
        {id: 'Node 2', label: 'id2', group: 'Group 1'},
        {id: 'Node 3', label: 'id3', group: 'Group 2'},
        {id: 'Node 4', label: 'id4', group: 'Group 2'},
        {id: 'Node 5', label: 'id5', group: 'Group 2'},
        {id: 'Node 6', label: 'id6', group: 'Group 3'},
        {id: 'Node 7', label: 'id7', group: 'Group 3'},
        {id: 'Node 8', label: 'id8', group: 'Group 4'},
        {id: 'Node 9', label: 'id9', group: 'Group 4'},
        {id: 'Node 10', label: 'id10', group: 'Group 4'},
        {id: 'Node 11', label: 'id11', group: 'Group 4'},
        {id: 'Node 12', label: 'id12', group: 'Group 4'},
        {id: 'Node 13', label: 'id13', group: 'Group 4'},
        {id: 'Node 14', label: 'id14', group: 'Group 4'},
        {id: 'Node 15', label: 'id15', group: 'Group 4'},
        {id: 'Node 16', label: 'id16', group: 'Group 4'},
        {id: 'Node 17', label: 'id17', group: 'Group 4'},
        {id: 'Node 18', label: 'id18', group: 'Group 4'},
        {id: 'Node 19', label: 'id19', group: 'Group 4'},
        {id: 'Node 20', label: 'id20', group: 'Group 4'},
        {id: 'Node 21', label: 'id21', group: 'Group 4'},
        {id: 'Node 22', label: 'id22', group: 'Group 4'},
        {id: 'Node 23', label: 'id23', group: 'Group 4'},
        {id: 'Node 24', label: 'id24', group: 'Group 4'},
        {id: 'Node 25', label: 'id25', group: 'Group 4'},
        {id: 'Node 26', label: 'id26', group: 'Group 4'},
        {id: 'Node 27', label: 'id27', group: 'Group 4'},
        {id: 'Node 28', label: 'id28', group: 'Group 4'},
        {id: 'Node 29', label: 'id29', group: 'Group 4'},
        {id: 'Node 30', label: 'id30', group: 'Group 4'},

    ],
    links: [
        {source: 'Node 1', target: 'Node 2', weight: 5, count: 2, label: 'Lbl 1'},
        {source: 'Node 1', target: 'Node 3', weight: 3, count: 1, label: 'Mobile No.'},
        {source: 'Node 1', target: 'Node 4', weight: 3, count: 1, label: 'Mobile No.'},
        {source: 'Node 1', target: 'Node 5', weight: 3, count: 1, label: 'Mobile No.'},
        {source: 'Node 1', target: 'Node 6', weight: 3, count: 1, label: 'Mobile No.'},
        {source: 'Node 1', target: 'Node 7', weight: 3, count: 1, label: 'Email address'},
        {source: 'Node 1', target: 'Node 8', weight: 3, count: 1, label: 'Mobile No.'},
        {source: 'Node 1', target: 'Node 9', weight: 3, count: 1, label: 'Mobile No.'},
        {source: 'Node 1', target: 'Node 9', weight: 3, count: 1, label: 'Mobile No.'},
        {source: 'Node 1', target: 'Node 10', weight: 3, count: 1, label: 'Email address'},
        {source: 'Node 1', target: 'Node 11', weight: 3, count: 1, label: 'Mobile No.'},
        {source: 'Node 11', target: 'Node 12', weight: 3, count: 1, label: 'Account'},
        {source: 'Node 11', target: 'Node 13', weight: 3, count: 1, label: 'Account'},
        {source: 'Node 11', target: 'Node 14', weight: 3, count: 1, label: 'Email address'},
        {source: 'Node 11', target: 'Node 15', weight: 3, count: 1, label: 'Account'},
        {source: 'Node 10', target: 'Node 16', weight: 3, count: 1, label: 'Account'},
        {source: 'Node 7', target: 'Node 16', weight: 3, count: 1, label: 'Account'},
        {source: 'Node 16', target: 'Node 17', weight: 3, count: 1, label: 'Mobile No.'},
        {source: 'Node 17', target: 'Node 18', weight: 3, count: 1, label: 'Email address'},
        {source: 'Node 17', target: 'Node 19', weight: 3, count: 1, label: 'Account'},
        {source: 'Node 17', target: 'Node 20', weight: 3, count: 1, label: 'Mule Account'},
        {source: 'Node 17', target: 'Node 21', weight: 3, count: 1, label: 'Account'},
        {source: 'Node 4', target: 'Node 22', weight: 3, count: 1, label: 'Account'},
        {source: 'Node 4', target: 'Node 23', weight: 3, count: 1, label: 'Account'},
        {source: 'Node 4', target: 'Node 24', weight: 3, count: 1, label: 'Email address'},
        {source: 'Node 3', target: 'Node 25', weight: 3, count: 1, label: 'Account'},
        {source: 'Node 3', target: 'Node 26', weight: 3, count: 1, label: 'Account'},
        {source: 'Node 3', target: 'Node 27', weight: 3, count: 1, label: 'Account'},


    ],
};


const App = () => {

    return (
        <div className="app bg-red-400 w-full ">
            <NetworkGraph data={dummyData} width={900} height={900}/>

        </div>
    );
};

export default App;
