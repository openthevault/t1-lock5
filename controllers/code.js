var request = require('request');

exports.codeGET = function(req, res) {
  var options = "<body style='background-color: black;'><h1 style='color:white;text-align: center;font-family: &quot;ibm-plex-mono&quot;,&quot;Menlo&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,Courier,monospace !important;'><body style='background-color: black;'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum. Integer eget aliquet nibh praesent tristique. Vitae sapien pellentesque habitant morbi tristique senectus et. Pharetra magna ac placerat vestibulum lectus. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Morbi leo urna molestie at elementum eu facilisis. A diam maecenas sed enim ut. Adipiscing commodo elit at imperdiet dui accumsan.Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nibh tellus molestie nunc non. Nunc congue nisi vitae suscipit tellus mauris a. Nulla facilisi cras fermentum odio eu feugiat pretium. Bibendum neque egestas congue quisque egestas. Sed enim ut sem viverra aliquet eget sit amet tellus. Quisque egestas diam in arcu cursus euismod quis viverra. Ornare arcu odio ut sem nulla pharetra. Massa tincidunt dui ut ornare lectus sit amet est placerat. Vitae semper quis lectus nulla at volutpat. Viverra maecenas accumsan lacus vel.Eu scelerisque felis imperdiet proin fermentum. Aliquet bibendum enim facilisis gravida neque convallis. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Lacinia at quis risus sed vulputate. Viverra nam libero justo laoreet sit amet cursus. Accumsan in nisl nisi scelerisque eu ultrices. Amet mauris commodo quis imperdiet massa tincidunt nunc. Morbi tempus iaculis urna id volutpat. Nec dui nunc mattis enim ut. Donec enim diam vulputate ut pharetra sit amet aliquam id. In fermentum et sollicitudin ac orci phasellus. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Mi bibendum neque egestas congue quisque egestas diam in arcu. Odio tempor orci dapibus ultrices. Mus mauris vitae ultricies leo integer. Nisi scelerisque eu ultrices vitae auctor eu augue. Ante metus dictum at tempor commodo ullamcorper. Etiam sit amet nisl purus in mollis nunc sed id. Dictum varius duis at consectetur.Nulla aliquet enim tortor at auctor urna nunc id. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Non blandit massa enim nec dui. Rhoncus urna neque viverra justo. Condimentum mattis pellentesque id nibh tortor. Viverra vitae congue eu consequat ac. Iaculis urna id volutpat lacus laoreet non curabitur. Dui ut ornare lectus sit. Tortor consequat id porta nibh venenatis cras sed felis.<b style='color:blue;'> Hello </b>Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Ultrices in iaculis nunc sed. Ultricies mi eget mauris pharetra et ultrices neque. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Bibendum neque egestas congue quisque egestas. Senectus et netus et malesuada. Consectetur libero id faucibus nisl tincidunt eget. Blandit aliquam etiam erat velit scelerisque in dictum. Ornare lectus sit amet est placerat in. Nisl vel pretium lectus quam. Condimentum mattis pellentesque id nibh. Pellentesque massa placerat duis ultricies lacus. Quisque sagittis purus sit amet.Gravida neque convallis a cras semper auctor neque vitae tempus. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Et netus et malesuada fames ac turpis egestas. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Diam quam nulla porttitor massa id neque aliquam. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Purus in massa tempor nec feugiat nisl pretium. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Sit amet risus nullam eget felis eget nunc lobortis mattis. At augue eget arcu dictum. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare.Eget sit amet tellus cras adipiscing enim eu. Fermentum leo vel orci porta non pulvinar. Tellus elementum sagittis vitae et leo. Ligula ullamcorper malesuada proin libero nunc consequat interdum. A diam maecenas sed enim ut sem viverra aliquet eget. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Quis enim lobortis scelerisque fermentum dui faucibus in. In cursus turpis massa tincidunt dui. Tellus id interdum velit laoreet id donec. Massa id neque aliquam vestibulum morbi blandit cursus risus. Nulla aliquet enim tortor at auctor urna nunc id. Donec massa sapien faucibus et molestIaculis nunc sed augue lacus viverra vitae congue eu. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Posuere lorem ipsum dolor sit. Ultrices vitae auctor eu augue ut lectus arcu. Neque sodales ut etiam sit amet nisl purus in. Aliquet lectus proin nibh nisl condimentum id venenatis. Ornare aenean euismod elementum nisi. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Ut ornare lectus sit amet est placerat in egestas. Vulputate mi sit amet mauris commodo quis. Nunc faucibus a pellentesque sit amet porttitor. Sit amet purus gravida quis blandit turpis. Praesent semper feugiat nibh sed pulvinar. Vel facilisis volutpat est velit egestas dui id ornare arcu. Cursus in hac habitasse platea dictumst quisque. Mi proin sed libero enim sed faucibus turpis in eu. Dictum at tempor commodo ullamcorper a lacus vestibulumViverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Euismod nisi porta lorem mollis aliquam. Urna nunc id cursus metus aliquam eleifend. Vehicula ipsum a arcu cursus vitae congue mauris. Eget dolor morbi non arcu risus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Malesuada pellentesque elit eget gravida cum sociis natoque. Nec sagittis aliquam malesuada bibendum arcu. Sed velit dignissim sodales ut. Ullamcorper morbi tincidunt ornare massa. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Ultrices sagittis orci a scelerisque. Nulla porttitor massa id neque aliquam. Dui id ornare arcu odio ut sem nulla pharetra diam. Id aliquet lectus proin nibh. Risus nec feugiat in fermentum posuere urna.Ultrices eros in cursus turpis massa tincidunt. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Cras adipiscing enim eu turpis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Orci eu lobortis elementum nibh tellus molestie nunc. Sed augue lacus viverra vitae congue. Nam at lectus urna duis convallis convallis tellus id. Ipsum consequat nisl vel pretium lectus quam id leo in. Tellus elementum sagittis vitae et leo. Vulputate dignissim suspendisse in est ante in nibh. Arcu non odio euismod lacinia at quis risus. Dictum sit amet justo donec enim. Congue eu consequat ac felis donec et odio pellentesque diam. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Donec ac odio tempor orci dapibus. Tristique senectus et netus et malesuada fames.Diam phasellus vestibulum lorem sed risus ultricies. In est ante in nibh mauris cursus. Nullam vehicula ipsum a arcu. Mi ipsum faucibus vitae aliquet nec. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Volutpat sed cras ornare arcu dui vivamus. Enim sed faucibus turpis in eu mi bibendum neque. Rhoncus est pellentesque elit ullamcorper. Sed turpis tincidunt id aliquet risus feugiat in ante. Tempor orci eu lobortis elementum nibh. Sit amet mauris commodo quis imperdiet massa tincidunt. Sit amet venenatis urna cursus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Magna eget est lorem ipsum dolor sit amet. Aliquam vestibulum morbi blandit cursus risus. At urna condimentum mattis pellentesque id nibh tortor. Consectetur adipiscing elit duis tristique sollicitudin nibh. Velit egestas dui id ornare arcu odio ut. Nulla aliquet porttitor lacus luctus.Est lorem ipsum dolor sit amet consectetur adipiscing. Nec tincidunt praesent semper feugiat nibh. Volutpat sed cras ornare arcu dui vivamus arcu. Fermentum iaculis eu non diam phasellus. Quis imperdiet massa tincidunt nunc pulvinar sapien. Sed euismod nisi porta lorem mollis. Ullamcorper velit sed ullamcorper morbi tincidunt. Id ornare arcu odio ut sem nulla pharetra diam. Laoreet sit amet cursus sit amet. Nisi porta lorem mollis aliquam. Varius duis at consectetur lorem donec massa sapien. Egestas purus viverra accumsan in nisl nisi. Fermentum iaculis eu non diam phasellus vestibulum. Odio ut sem nulla pharetra diam sit. Sed nisi lacus sed viverra tellus in hac habitasse platea. Lectus quam id leo in vitae. Aenean euismod elementum nisi quis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Lorem ipsum dolor sit ametVitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Rutrum quisque non tellus orci ac auctor augue mauris. Tortor posuere ac ut consequat semper viverra nam. Enim praesent elementum facilisis leo vel. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Erat pellentesque adipiscing commodo elit at imperdiet. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Bibendum at varius vel pharetra vel turpis. Pellentesque habitant morbi tristique senectus et netus. Sit amet nisl purus in mollis nunc sed id.ec ultrices tincidunt arcu non. Odio morbi quis commodo odio aenean sed. Duis convallis convallis tellus id interdum velit laoreet id. Mauris ultrices eros in cursus turpis massa. Cursus mattis molestie a iaculis at erat. In cursus turpis massa tincidunt dui ut ornare lectus sit. Turpis cursus in hac habitasse platea. Ac tortor dignissim convallis aenean et tortor at risus. Id diam vel quam elementum pulvinar. Aliquam ut porttitor leo a diam sollicitudin tempor id. Nec sagittis aliquam malesuada bibendum arcu. Justo nec ultrices dui sapien eget mi. Magna etiam tempor orci eu lobortis. Dui ut ornare lectus sit amet est placerat in.</p></body>";
  request(options, function(err, response, body){
    res.send(options);
  });
};

exports.codePOST = function(req, res) {
  var data = req.body.data;
  if(req.body.data == "Hello"){
    console.log("Message Activate");
    request(data, function(err, response, body){
        res.send("<body style='background-color: black;'><h1 style='color:white;text-align: center;font-family: &quot;ibm-plex-mono&quot;,&quot;Menlo&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,Courier,monospace !important;'><body style='background-color: black;'><p> Vitae semper quis lectus nulla at volutpat. Viverra maecenas accumsan lacus vel.Eu scelerisque felis imperdiet proin fermentum. Aliquet bibendum enim facilisis gravida neque convallis. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum. Integer eget aliquet nibh praesent tristique. Vitae sapien pellentesque habitant morbi tristique senectus et. Pharetra magna ac placerat vestibulum lectus. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Morbi leo urna molestie at elementum eu facilisis. A diam maecenas sed enim ut. Adipiscing commodo elit at imperdiet dui accumsan.Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nibh tellus molestie nunc non. Nunc congue nisi vitae suscipit tellus mauris a. Nulla facilisi cras fermentum odio eu feugiat pretium. Bibendum neque egestas congue quisque egestas. Sed enim ut sem viverra aliquet eget sit amet tellus. Quisque egestas diam in arcu cursus euismod quis viverra. Ornare arcu odio ut sem nulla pharetra. Massa tincidunt dui ut ornare lectus sit amet est placerat. Vitae semper quis lectus nulla at volutpat. Viverra maecenas accumsan lacus vel.Eu scelerisque felis imperdiet proin fermentum. Aliquet bibendum enim facilisis gravida neque convallis. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Lacinia at quis risus sed vulputate. Viverra nam libero justo laoreet sit amet cursus. Accumsan in nisl nisi scelerisque eu ultrices. Amet mauris commodo quis imperdiet massa tincidunt nunc. Morbi tempus iaculis urna id volutpat. Nec dui nunc mattis enim ut. Donec enim diam vulputate ut pharetra sit amet aliquam id. In fermentum et sollicitudin ac orci phasellus. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Mi bibendum neque egestas congue quisque egestas diam in arcu. Odio tempor orci dapibus ultrices. Mus mauris vitae ultricies leo integer. Nisi scelerisque eu ultrices vitae auctor eu augue. Ante metus dictum at tempor commodo ullamcorper. Etiam sit amet nisl purus in mollis nunc sed id. Dictum varius duis at consectetur.Nulla aliquet enim tortor at auctor urna nunc id. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Non blandit massa enim nec dui. Rhoncus urna neque viverra justo. Condimentum mattis pellentesque id nibh tortor. Viverra vitae congue eu consequat ac. Iaculis urna id volutpat lacus laoreet non curabitur. Dui ut ornare lectus sit. Tortor consequat id porta nibh venenatis cras sed felis.Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Ultrices in iaculis nunc sed. Ultricies mi eget mauris pharetra et ultrices neque. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Bibendum neque egestas congue quisque egestas. Senectus et netus et malesuada. Consectetur libero id faucibus nisl tincidunt eget. Blandit aliquam etiam erat velit scelerisque in dictum. Ornare lectus sit amet est placerat in. Nisl vel pretium lectus quam. Condimentum mattis pellentesque id nibh. Pellentesque massa placerat duis ultricies lacus. Quisque sagittis purus sit amet.Gravida neque convallis a cras semper auctor neque vitae tempus. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Et netus et malesuada fames ac turpis egestas. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Diam quam nulla porttitor massa id neque aliquam. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Purus in massa tempor nec feugiat nisl pretium. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Sit amet risus nullam eget felis eget nunc lobortis mattis. At augue eget arcu dictum. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare.Eget sit amet tellus cras adipiscing enim eu. Fermentum leo vel orci porta non pulvinar. Tellus elementum sagittis vitae et leo. Ligula ullamcorper malesuada proin libero nunc consequat interdum. A diam maecenas sed enim ut sem viverra aliquet eget. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Quis enim lobortis scelerisque fermentum dui faucibus in. In cursus turpis massa tincidunt dui. Tellus id interdum velit laoreet id donec. Massa id neque aliquam vestibulum morbi blandit cursus risus. Nulla aliquet enim tortor at auctor urna nunc id. Donec massa sapien faucibus et molestIaculis nunc sed augue lacus viverra vitae congue eu. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Posuere lorem ipsum dolor sit. Ultrices vitae auctor eu augue ut lectus arcu. Neque sodales ut etiam sit amet nisl purus in. Aliquet lectus proin nibh nisl condimentum id venenatis. Ornare aenean euismod elementum nisi. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Ut ornare lectus sit amet est placerat in egestas. Vulputate mi sit amet mauris commodo quis. Nunc faucibus a pellentesque sit amet porttitor. Sit amet purus gravida quis blandit turpis. Praesent semper feugiat nibh sed pulvinar. Vel facilisis volutpat est velit egestas dui id ornare arcu. Cursus in hac habitasse platea dictumst quisque. Mi proin sed libero enim sed faucibus turpis in eu. Dictum at tempor commodo ullamcorper a lacus vestibulumViverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Euismod nisi porta lorem mollis aliquam. Urna nunc id cursus metus aliquam eleifend. Vehicula ipsum a arcu cursus vitae congue mauris. Eget dolor morbi non arcu risus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Malesuada pellentesque elit eget gravida cum sociis natoque. Nec sagittis aliquam malesuada bibendum arcu. Sed velit dignissim sodales ut. Ullamcorper morbi tincidunt ornare massa. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Ultrices sagittis orci a scelerisque. Nulla porttitor massa id neque aliquam. Dui id ornare arcu odio ut sem nulla pharetra diam. Id aliquet lectus proin nibh. Risus nec feugiat in fermentum posuere urna.Ultrices eros in cursus turpis massa tincidunt. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Cras adipiscing enim eu turpis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Orci eu lobortis elementum nibh tellus molestie nunc. Sed augue lacus viverra vitae congue. Nam at lectus urna duis convallis convallis tellus id. Ipsum consequat nisl vel pretium lectus quam id leo in. Tellus elementum sagittis vitae et leo. Vulputate dignissim suspendisse in est ante in nibh. Arcu non odio euismod lacinia at quis risus. Dictum sit amet justo donec enim. Congue eu consequat ac felis donec et odio pellentesque diam. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Donec ac odio tempor orci dapibus. Tristique senectus et netus et malesuada fames.Diam phasellus vestibulum lorem sed risus ultricies. In est ante in nibh mauris cursus. Nullam vehicula ipsum a arcu. Mi ipsum faucibus vitae aliquet nec. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Volutpat sed cras ornare arcu dui vivamus. Enim sed faucibus turpis in eu mi bibendum neque. Rhoncus est pellentesque elit ullamcorper. Sed turpis tincidunt id aliquet risus feugiat in ante. Tempor orci eu lobortis elementum nibh. Sit amet mauris commodo quis imperdiet massa tincidunt. Sit amet venenatis urna cursus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Magna eget est lorem ipsum dolor sit amet. Aliquam vestibulum morbi blandit cursus risus. At urna condimentum mattis pellentesque id nibh tortor. Consectetur adipiscing elit duis tristique sollicitudin nibh. <b style='color:blue;'> Hello </b> <b style='color:red;'> W0rld </b>Velit egestas dui id ornare arcu odio ut. Nulla aliquet porttitor lacus luctus.Est lorem ipsum dolor sit amet consectetur adipiscing. Nec tincidunt praesent semper feugiat nibh. Volutpat sed cras ornare arcu dui vivamus arcu. Fermentum iaculis eu non diam phasellus. Quis imperdiet massa tincidunt nunc pulvinar sapien. Sed euismod nisi porta lorem mollis. Ullamcorper velit sed ullamcorper morbi tincidunt. Id ornare arcu odio ut sem nulla pharetra diam. Laoreet sit amet cursus sit amet. Nisi porta lorem mollis aliquam. Varius duis at consectetur lorem donec massa sapien. Egestas purus viverra accumsan in nisl nisi. Fermentum iaculis eu non diam phasellus vestibulum. Odio ut sem nulla pharetra diam sit. Sed nisi lacus sed viverra tellus in hac habitasse platea. Lectus quam id leo in vitae. Aenean euismod elementum nisi quis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Lorem ipsum dolor sit ametVitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Rutrum quisque non tellus orci ac auctor augue mauris. Tortor posuere ac ut consequat semper viverra nam. Enim praesent elementum facilisis leo vel. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Erat pellentesque adipiscing commodo elit at imperdiet. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Bibendum at varius vel pharetra vel turpis. Pellentesque habitant morbi tristique senectus et netus. Sit amet nisl purus in mollis nunc sed id.ec ultrices tincidunt arcu non. Odio morbi quis commodo odio aenean sed. Duis convallis convallis tellus id interdum velit laoreet id. Mauris ultrices eros in cursus turpis massa. Cursus mattis molestie a iaculis at erat. In cursus turpis massa tincidunt dui ut ornare lectus sit. Turpis cursus in hac habitasse platea. Ac tortor dignissim convallis aenean et tortor at risus. Id diam vel quam elementum pulvinar. Aliquam ut porttitor leo a diam sollicitudin tempor id. Nec sagittis aliquam malesuada bibendum arcu. Justo nec ultrices dui sapien eget mi. Magna etiam tempor orci eu lobortis. Dui ut ornare lectus sit amet est placerat in.</p></body>");
      });

  }else{
    console.error("Bad Request");
    request(data, function(err, response, body){
        res.send("<body style='background-color: black;'><h1 style='color:white;text-align: center;font-family: &quot;ibm-plex-mono&quot;,&quot;Menlo&quot;,&quot;DejaVu Sans Mono&quot;,&quot;Bitstream Vera Sans Mono&quot;,Courier,monospace !important;'><body style='background-color: black;'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum. Integer eget aliquet nibh praesent tristique. Vitae sapien pellentesque habitant morbi tristique senectus et. Pharetra magna ac placerat vestibulum lectus. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Morbi leo urna molestie at elementum eu facilisis. A diam maecenas sed enim ut. Adipiscing commodo elit at imperdiet dui accumsan.Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nibh tellus molestie nunc non. Nunc congue nisi vitae suscipit tellus mauris a. Nulla facilisi cras fermentum odio eu feugiat pretium. Bibendum neque egestas congue quisque egestas. Sed enim ut sem viverra aliquet eget sit amet tellus. Quisque egestas diam in arcu cursus euismod quis viverra. Ornare arcu odio ut sem nulla pharetra. Massa tincidunt dui ut ornare lectus sit amet est placerat. Vitae semper quis lectus nulla at volutpat. Viverra maecenas accumsan lacus vel.Eu scelerisque felis imperdiet proin fermentum. Aliquet bibendum enim facilisis gravida neque convallis. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Lacinia at quis risus sed vulputate. Viverra nam libero justo laoreet sit amet cursus. Accumsan in nisl nisi scelerisque eu ultrices. Amet mauris commodo quis imperdiet massa tincidunt nunc. Morbi tempus iaculis urna id volutpat. Nec dui nunc mattis enim ut. Donec enim diam vulputate ut pharetra sit amet aliquam id. In fermentum et sollicitudin ac orci phasellus. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Mi bibendum neque egestas congue quisque egestas diam in arcu. Odio tempor orci dapibus ultrices. Mus mauris vitae ultricies leo integer. Nisi scelerisque eu ultrices vitae auctor eu augue. Ante metus dictum at tempor commodo ullamcorper. Etiam sit amet nisl purus in mollis nunc sed id. Dictum varius duis at consectetur.Nulla aliquet enim tortor at auctor urna nunc id. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Non blandit massa enim nec dui. Rhoncus urna neque viverra justo. Condimentum mattis pellentesque id nibh tortor. Viverra vitae congue eu consequat ac. Iaculis urna id volutpat lacus laoreet non curabitur. Dui ut ornare lectus sit. Tortor consequat id porta nibh venenatis cras sed felis.Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Ultrices in iaculis nunc sed. Ultricies mi eget mauris pharetra et ultrices neque. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Bibendum neque egestas congue quisque egestas. Senectus et netus et malesuada. Consectetur libero id faucibus nisl tincidunt eget. Blandit aliquam etiam erat velit scelerisque in dictum. Ornare lectus sit amet est placerat in. Nisl vel pretium lectus quam. Condimentum mattis pellentesque id nibh. Pellentesque massa placerat duis ultricies lacus. Quisque sagittis purus sit amet.Gravida neque convallis a cras semper auctor neque vitae tempus. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Et netus et malesuada fames ac turpis egestas. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Diam quam nulla porttitor massa id neque aliquam. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Purus in massa tempor nec feugiat nisl pretium. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Sit amet risus nullam eget felis eget nunc lobortis mattis. At augue eget arcu dictum. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare.Eget sit amet tellus cras adipiscing enim eu. Fermentum leo vel orci porta non pulvinar. Tellus elementum sagittis vitae et leo. Ligula ullamcorper malesuada proin libero nunc consequat interdum. A diam maecenas sed enim ut sem viverra aliquet eget. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Quis enim lobortis scelerisque fermentum dui faucibus in. In cursus turpis massa tincidunt dui. Tellus id interdum velit laoreet id donec. Massa id neque aliquam vestibulum morbi blandit cursus risus. Nulla aliquet enim tortor at auctor urna nunc id. Donec massa sapien faucibus et molestIaculis nunc sed augue lacus viverra vitae congue eu. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Posuere lorem ipsum dolor sit. Ultrices vitae auctor eu augue ut lectus arcu. Neque sodales ut etiam sit amet nisl purus in. Aliquet lectus proin nibh nisl condimentum id venenatis. Ornare aenean euismod elementum nisi. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Ut ornare lectus sit amet est placerat in egestas. Vulputate mi sit amet mauris commodo quis. Nunc faucibus a pellentesque sit amet porttitor. Sit amet purus gravida quis blandit turpis. Praesent semper feugiat nibh sed pulvinar. Vel facilisis volutpat est velit egestas dui id ornare arcu. Cursus in hac habitasse platea dictumst quisque. Mi proin sed libero enim sed faucibus turpis in eu. Dictum at tempor commodo ullamcorper a lacus vestibulumViverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Euismod nisi porta lorem mollis aliquam. Urna nunc id cursus metus aliquam eleifend. Vehicula ipsum a arcu cursus vitae congue mauris. Eget dolor morbi non arcu risus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Malesuada pellentesque elit eget gravida cum sociis natoque. Nec sagittis aliquam malesuada bibendum arcu. Sed velit dignissim sodales ut. Ullamcorper morbi tincidunt ornare massa. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Ultrices sagittis orci a scelerisque. Nulla porttitor massa id neque aliquam. Dui id ornare arcu odio ut sem nulla pharetra diam. Id aliquet lectus proin nibh. Risus nec feugiat in fermentum posuere urna.Ultrices eros in cursus turpis massa tincidunt. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Cras adipiscing enim eu turpis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Orci eu lobortis elementum nibh tellus molestie nunc. Sed augue lacus viverra vitae congue. Nam at lectus urna duis convallis convallis tellus id. Ipsum consequat nisl vel pretium lectus quam id leo in. Tellus elementum sagittis vitae et leo. Vulputate dignissim suspendisse in est ante in nibh. Arcu non odio euismod lacinia at quis risus. Dictum sit amet justo donec enim. Congue eu consequat ac felis donec et odio pellentesque diam. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Donec ac odio tempor orci dapibus. Tristique senectus et netus et malesuada fames.Diam phasellus vestibulum lorem sed risus ultricies. In est ante in nibh mauris cursus. Nullam vehicula ipsum a arcu. Mi ipsum faucibus vitae aliquet nec. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Volutpat sed cras ornare arcu dui vivamus. Enim sed faucibus turpis in eu mi bibendum neque. Rhoncus est pellentesque elit ullamcorper. Sed turpis tincidunt id aliquet risus feugiat in ante. Tempor orci eu lobortis elementum nibh. Sit amet mauris commodo quis imperdiet massa tincidunt. Sit amet venenatis urna cursus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Magna eget est lorem ipsum dolor sit amet. Aliquam vestibulum morbi blandit cursus risus. At urna condimentum mattis pellentesque id nibh tortor. Consectetur adipiscing elit duis tristique sollicitudin nibh. Velit egestas dui id ornare arcu odio ut. Nulla aliquet porttitor lacus luctus.Est lorem ipsum dolor sit amet consectetur adipiscing. Nec tincidunt praesent semper feugiat nibh. Volutpat sed cras ornare arcu dui vivamus arcu. Fermentum iaculis eu non diam phasellus. Quis imperdiet massa tincidunt nunc pulvinar sapien. Sed euismod nisi porta lorem mollis. Ullamcorper velit sed ullamcorper morbi tincidunt. Id ornare arcu odio ut sem nulla pharetra diam. Laoreet sit amet cursus sit amet. Nisi porta lorem mollis aliquam. Varius duis at consectetur lorem donec massa sapien. Egestas purus viverra accumsan in nisl nisi. Fermentum iaculis eu non diam phasellus vestibulum. Odio ut sem nulla pharetra diam sit. Sed nisi lacus sed viverra tellus in hac habitasse platea. Lectus quam id leo in vitae. Aenean euismod elementum nisi quis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Lorem ipsum dolor sit ametVitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Rutrum quisque non tellus orci ac auctor augue mauris. Tortor posuere ac ut consequat semper viverra nam. Enim praesent elementum facilisis leo vel. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Erat pellentesque adipiscing commodo elit at imperdiet. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Bibendum at varius vel pharetra vel turpis. Pellentesque habitant morbi tristique senectus et netus. Sit amet nisl purus in mollis nunc sed id.ec ultrices tincidunt arcu non. Odio morbi quis commodo odio aenean sed. Duis convallis convallis tellus id interdum velit laoreet id. Mauris ultrices eros in cursus turpis massa. Cursus mattis molestie a iaculis at erat. In cursus turpis massa tincidunt dui ut ornare lectus sit. Turpis cursus in hac habitasse platea. Ac tortor dignissim convallis aenean et tortor at risus. Id diam vel quam elementum pulvinar. Aliquam ut porttitor leo a diam sollicitudin tempor id. Nec sagittis aliquam malesuada bibendum arcu. Justo nec ultrices dui sapien eget mi. Magna etiam tempor orci eu lobortis. Dui ut ornare lectus sit amet est placerat in.</p></body>");
      });
  }

};

exports.codePUT = function(req, res) {
    console.log("Reciving data");
    var data = req.body.data;
    console.log(data)
    request(data, function(err, response, body){
      res.send(data);
    });
  };