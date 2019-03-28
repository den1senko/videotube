var axios = require('axios');

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/commentThreads';

module.exports = function (options, callback) {
  

  var params = {
    part: 'snippet',
    videoId: options.videoId,
    textFormat: 'plainText',
    maxResults: options.maxResults
  };

  axios.get(ROOT_URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.items); }
    })
    .catch(function(error) {
      console.error(error);
    });
};
