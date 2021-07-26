import React, {useState} from 'react';

import './App.css';
import Chair from './components/Chair';
import Pale from './components/Plate';
import Scene from './components/Scene';
import SelectChairsCount from './components/SelectChairsCount';
import SelectTableType from './components/SelectTableType';
import Table from './components/Table';
import {TableType} from './constants/Table';
import {array} from './helpers/array';

function App() {
    const [count, setCount] = useState(2);
    const [active, setActive] = useState(2);
    const [tableType, setTableType] = useState(TableType.Circle);

    return (
        <Scene>
            <SelectTableType
                setTableType={setTableType}
                tableType={tableType}
            />
            <SelectChairsCount
                count={count}
                setCount={setCount}
                active={active}
                setActive={setActive}
            />
            <Table chairCount={count} tableType={tableType} />
            {array(count).map((_, i) => (
                <Pale
                    key={i}
                    index={i}
                    count={count}
                    active={active > i}
                    tableType={tableType}
                />
            ))}
            {array(count).map((_, i) => (
                <Chair
                    key={i}
                    index={i}
                    count={count}
                    active={active > i}
                    tableType={tableType}
                />
            ))}
        </Scene>
    );
}

export default App;
