class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentVideo: 0};
  }

  changeVideo(x) {
    console.log(x, this);
    
    console.log(x, "?????");
    //document.getElementById('player').attr('video', x);
  }
  render() {
    return (
    <div>
      <Nav />
      <div className='col-md-7'>
        <VideoPlayer id ='player' video={exampleVideoData[0]}/>
      </div>
      <div className='col-md-5'>
        <VideoList videos={exampleVideoData} onClickChange={this.changeVideo.bind(this)}/>
      </div>
    </div>
    );
  }


}
// In the ES6 spec, files are 'modules' and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
