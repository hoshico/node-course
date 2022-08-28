const fs = require('fs');
const { json } = require('stream/consumers');

//const book = {
//  title: 'Ego is the Enemy',
//  author: 'Ryan Holiday',
//}

/*
  JSON.stringfy()
  オブジェクトや配列など任意の値を受け取りJSON文字列に変換
  文字列/配列 → JSONに変換
*/
//const bookJSON = JSON.stringify(book);

/*
  JSON.parse()
  JSON → 文字列/配列
*/
//const parseData = JSON.parse(bookJSON);

/*
  第一引数で指定したファイル名でJSONファイルを作成できる
*/
//fs.writeFileSync('1-json.json', bookJSON);

//const detaBuffer = fs.readFileSync('1-json.json');
//const detaJSON = detaBuffer.toString();
//const deta = JSON.parse(dataJSON);

const detaBuffer = fs.readFileSync('1-json.json');
// toStringで文字列に変換
const DetaJSON = detaBuffer.toString();
//console.log(DetaJSON);
const parseDeta = JSON.parse(DetaJSON);
//console.log(parseDeta);
parseDeta.name = "yasu";
parseDeta.age = "35";
//console.log(parseDeta);

const newJsonDeta = JSON.stringify(parseDeta);
fs.writeFileSync('1-json.json', newJsonDeta);