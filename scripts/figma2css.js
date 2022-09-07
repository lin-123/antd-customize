const fs = require('fs');
const readline = require('readline');
const path = require('path');
const groupBy = require('lodash').groupBy;
const figmaJson = require('./figmaMap.json');

const readFileToArr = () => {
  return new Promise((resolve) => {
    try {
      const fReadName = path.join(__dirname, '/figma.txt');
      var fRead = fs.createReadStream(fReadName);
      var objReadline = readline.createInterface({
        input: fRead,
      });
      var arr = new Array();
      objReadline.on('line', function (line) {
        arr.push(line);
      });
      objReadline.on('close', function () {
        resolve(arr);
      });
    } catch (error) {
      resolve([]);
    }
  });
};
const write2BaseLess = (res) => {
  const baseLessFilePath = path.join(__dirname, '../src/style/index.less');
  let content = fs.readFileSync(baseLessFilePath, 'utf-8');
  content += `\n${res.join('\n')}`;
  fs.writeFileSync(baseLessFilePath, content, 'utf-8');
};
const getFigmaCss = async () => {
  const figmaCss = await readFileToArr();
  let res = [];
  if (figmaCss.length > 0) {
    figmaCss.forEach((fig) => {
      fig = fig.replace(/\s/g, '');
      if (/^colors\//.test(fig)) {
        const reg = /r:\d+,g:\d+,b:\d+,a:\d+/;
        let rgba = fig.match(reg)[0];
        rgba = rgba.match(/\d+/g);
        if (rgba.length === 4) {
          rgba[3] = (rgba[3] / 255).toFixed(2);
        }
        rgba = `rgba(${rgba.join(', ')})`;
        Object.keys(figmaJson.colors).forEach((k) => {
          if (new RegExp(`colors\/${k}/`).test(fig)) {
            res.push({ k: `${figmaJson.colors[k]}`, v: rgba });
          }
        });
      }
    });
    if (res.length) {
      res = groupBy(res, 'k');
      let finalRes = [];
      Object.keys(res).forEach((k) => {
        const temp = res[k];
        temp.forEach((t, idx) => {
          finalRes.push(`${t.k}-${idx + 1}: ${t.v};`);
        });
      });
      write2BaseLess(finalRes);
    }
  }
};
getFigmaCss();
