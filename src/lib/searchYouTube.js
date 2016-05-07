var searchYouTube = (options, callback) => {
  console.log(options,callback);
  var settings = {
    key: options.key || window.YOUTUBE_API_KEY,
    q: options.query || 'cats',
    maxResults: options.max || 5,
    part: 'snippet',
    type: 'video',
    videoEmbeddable: true
    
  };
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search/',
    type: 'GET',
    data: settings,
    success: (data) => { if (callback) { callback(data.items); } },
    error: (e) => console.log(e, 'did not work')
  });

};

window.searchYouTube = searchYouTube;
