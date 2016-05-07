class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentVideo: window.exampleVideoData[0]};
  }
  changeVideo(x) {
    this.setState({
		currentVideo: x
	});
  }
  render() {
    return (
    <div>
      <Nav />
      <div className='col-md-7'>
        <VideoPlayer id ='player' video={this.state.currentVideo}/>
      </div>
      <div className='col-md-5'>
        <VideoList videos={exampleVideoData} clicker={this.changeVideo.bind(this)}/>
      </div>
    </div>
    );
  }


}
// In the ES6 spec, files are 'modules' and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
