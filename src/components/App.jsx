class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
    this.search = _.debounce(this.youTubeSearch.bind(this), 500);

  }

  componentDidMount() {
    console.log(this);
    var context = this.changeVideo.bind(this);
    this.props.searchYouTube({}, function(x) {
      context(x[0], x);
      console.log(x);
    });
  }

  changeVideo(newVideo, videoList) {
    console.log(newVideo, VideoList);
    if (videoList === undefined || !videoList instanceof Object) {
      this.setState({
        currentVideo: newVideo
      });
    } else {
      this.setState({
        currentVideo: newVideo,
        videos: videoList
      });
    }
  }

  youTubeSearch(query) {
    console.log('query', query);
    if (query) {
      console.log(this);
      console.log(this.searchYouTube);
      var binded = this.changeVideo.bind(this);
      this.props.searchYouTube({query: query}, function(x) {
        binded(x[0], x);
      });
    }
  }

  render() {
    return (
    <div>
      <Nav context={this.search}/>
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
