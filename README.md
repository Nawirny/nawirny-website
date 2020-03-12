Enlight.me website
========================
This is the source code for the Enlight.me organization website.

[![GitHub license](https://img.shields.io/github/license/enlight-me/enlightme-website)](https://github.com/enlight-me/enlightme-website/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/enlight-me/enlightme-website)](https://github.com/enlight-me/enlightme-website)
[![GitHub stars](https://img.shields.io/github/stars/enlight-me/enlightme-website)](https://github.com/enlight-me/enlightme-website)
[![GitHub stars](https://img.shields.io/github/forks/enlight-me/enlightme-website)](https://github.com/enlight-me/enlightme-website/network/members)

Project Setup
============

Clone this GitHub repository. 
``` 
git clone https://github.com/enlight-me/enlightme-website.git
```

Install dependiencies and compile React.js web application.

```
cd enlightme-website
npm install
npm start
```

To deploy to github pages :
```
export NODE_OPTIONS=--max_old_space_size=8192
npm run build
npm run deploy
```
