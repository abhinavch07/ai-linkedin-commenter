const https = require('https');
https.get('https://www.ailinkedincommenter.com/assets/index-s4lxKKai.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/.{0,50}Pricing.{0,50}/g);
    if (matches) {
      console.log(matches.slice(0, 20).join('\n'));
    }
  });
});
