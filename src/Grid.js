import React from 'react';
import GridCell from './GridCell.js'
import './Grid.css';

class Grid extends React.Component {
    render() {

        let rows = []
        let columns = []
        let containers = []

        for (let i = 1; i < this.props.rows; i++) {
            let s = { top: `${(100 / this.props.rows) * i}vh` }
            rows.push(<div style={s} className='gridline-row'></div>)
        }
        for (let i = 1; i < this.props.columns; i++) {
            let s = { left: `${(100 / this.props.columns) * i}vw` }
            columns.push(<div style={s} className='gridline-column'></div>)
        }

        for (let i = 0; i < this.props.columns * this.props.rows; i++) {
            //containers.push(<div style={s} className='grid-container'></div>)
            containers.push(<GridCell></GridCell>)
        }

        const gridStyle = {
            display: 'grid',
            gridTemplateColumns: `repeat(${this.props.columns}, 1fr`,
            gridTemplateRows: `repeat(${this.props.rows}, 1fr`,
        }
        return (
            <>
                <div className="gridlines">
                    {rows}
                    {columns}
                </div>
                <div className='grid' style={gridStyle}>
                    {containers}
                </div>
            </>
        );
    }
}

export default Grid;