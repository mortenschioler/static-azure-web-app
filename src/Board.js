'use strict';

const e = React.createElement;

var db = { isColored: true }

const coloredBoard = <div className="board board-colored" />
const colorlessBoard = <div className="board board-colorless" />

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);


var setAppState;

function Board(props) {
    var board;
    if (props.isColored) board = coloredBoard;
    else board = colorlessBoard;
    return (
        <div style= {{width: "75%", margin:"auto", "paddingTop":"2rem"}}>
            {board}
        </div>
    );
}

class App extends React.Component {
    props

    constructor(props) {
        super(props);
        this.state = { isColored: false };
        this.changeColor = this.changeColor.bind(this);
    }

    componentDidMount() {
        setAppState = this.setState.bind(this);
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