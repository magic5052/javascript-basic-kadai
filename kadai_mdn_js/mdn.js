// 時間情報を取得
let info = new Date();

// 年、月、日をそれぞれ変数に代入
let year = info.getFullYear();
let month = info.getMonth() + 1;
let date = info.getDate();

// 出力
console.log(year + "年" + month + "月" + date + "日");