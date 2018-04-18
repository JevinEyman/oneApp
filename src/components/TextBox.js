
class Application extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { x: 0, y: 0 };
  }
  
  _onMouseMove(e) {
    const position = this.refs.elem.getDOMNode().getBoundingClientRect();
    console.log(position, e.nativeEvent.offsetX, e.screenX);

    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }
  
  render() {
    const { x, y } = this.state;
    return <div ref="elem" className="container">
      <div>
        <img onMouseMove={this._onMouseMove.bind(this)} width="200" height="200" src="https://yt3.ggpht.com/-7zFDHK5X45w/AAAAAAAAAAI/AAAAAAAAAAA/QJfHeLTEZwE/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" />
      </div>
      <h1>Mouse coordinates: { x } { y }</h1>
    </div>;
  }
}