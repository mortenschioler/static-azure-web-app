'use strict';

const e = React.createElement;

var db = { isColored: true }

const coloredBoard = <div className="board board-colored" />
const colorlessBoard = <div className="board board-colorless" />

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);

function Board(props) {
    if (props.isColored) return coloredBoard;
    else return colorlessBoard;
}

function Clickable(props) {
    <div onClick={props.onClick}>{props.children}</div>
}

class App extends React.Component {
    props

    constructor(props) {
        super(props);
        this.state = { isColored: true };
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        var state = this.state;
        state.isColored = !state.isColored;
        this.setState(state);
    }

    render() {
        return (
            <div onClick={this.changeColor}>
                <Board isColored={this.state.isColored}></Board>
            </div>
        );
    }
}

root.render(<App />);