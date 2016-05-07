var searchYouTube = (options, callback) => {
  var settings = {
    key: options.key,
    q: options.query,
    maxResults: options.max,
    part: 'snippet',
    type: 'video',
    videoEmbeddable: true
    
  };
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search/',
    type: 'GET',
    data: settings,
    success: (data) => callback(data.items),
    error: (e) => console.log(e, 'did not work')
  });
};

window.searchYouTube = searchYouTube;
