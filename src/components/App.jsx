class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };

  }

  componentDidMount() {

    var context = this.changeVideo.bind(this);

    
    this.props.searchYouTube({}, function(x) {
      console.log(x[0]);
      context(x[0], x);
    });
  }



  changeVideo(newVideo, videoList) {
    //console.log('state changed to', x, ' from', this.state.currentVideo);
    this.setState({
      currentVideo: newVideo,
      videos: videoList
    });
    //console.log(this.state.currentVideo);
  }
  render() {
    return (
    <div>
      <Nav />
      <div className='col-md-7'>
        <VideoPlayer id ='player' video={this.state.currentVideo}/>
      </div>
      <div className='col-md-5'>
        <VideoList videos={this.state.videos} clicker={this.changeVideo.bind(this)}/>
      </div>
    </div>
    );
  }


}
// In the ES6 spec, files are 'modules' and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// As you've done with other modules, make searchYouTube available for consumption and pass it as a prop to your app
// Replace exampleVideoData from the initial state of App with empty initial values, appropriate to the type of values it is expecting
// Utilize the componentDidMount lifecycle hook to render your app with live videos returned from searchYouTube
// Remove the x from the pending tests in AppSpec.jsx, and make sure all the App tests are passing. You can open the tests with npm test
// Implement live-search
