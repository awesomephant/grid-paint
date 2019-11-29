import React from 'react';

class GridCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTile: 6
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        const tileCount = 6;
        e.preventDefault();
        this.setState((prevState) => {
            prevState.currentTile++;
            if (prevState.currentTile > tileCount) {
                prevState.currentTile = 1;
            }
            return prevState
        })
    }
    render() {
        let s = {
            backgroundImage: `url(./assets/${this.state.currentTile}.png)`
//            backgroundImage: `url(./assets/test.jpg)`
        }
        return (
            <div style={s} onClick={this.handleClick} className='grid-cell'>
                <span className='grid-cell--counter'>
                {this.state.currentTile}
                </span>
            </div>
        )
    }
}

export default GridCell;