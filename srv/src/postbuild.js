const fs = require('fs');

fs.copyFile('./src/controllers/home/index.html', './dist/controllers/home/index.html', (err) => {
  if (err) throw err;
  console.log('Index HTML File was copied correctly');
});
