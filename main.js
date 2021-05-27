var Mega_Torrent = require('mega-torrent/src/index.js');
var mega_t = new Mega_Torrent({
  email: process.env.Emailmeg,
  password: process.env.megPass
});

var url = 'magnet:?xt=urn:btih:2CB17311A72FD1930CC4DBC3A3F4D684D8ADDE27';
mega_t.download(url);
setInterval(function(){
  var client = mega_t.getClients()[url];
  var mega = mega_t.getMegas()[url];
  if(client){
    console.log("Download progress: ", Math.round(client.getProgress() * 100), "%");
  }
  if(mega){
    console.log("Upload progress: ", Math.round(mega.getProgress() * 100), "%");
  }
}, 5000);

