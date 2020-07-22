/**
 * 如果每章大标题的数字只有一个需要设置 text-indent: 1em;
 */
let num = document.getElementsByClassName('number')[0]
let number = num.textContent

if (number.length === 1) {
  num.style.textIndent = '8rem';
}
