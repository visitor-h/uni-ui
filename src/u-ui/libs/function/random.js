// 会大于等于，小于等于  [] 增加上边界值
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    let gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}

export default random;
