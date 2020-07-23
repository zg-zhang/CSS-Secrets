/**
 * 如果每章大标题的数字只有一个需要设置 text-indent: 1em;
 */
let num = document.getElementsByClassName('number')[0]
let number = num.textContent

if (number.length === 1) {
  num.style.textIndent = '8rem';
}

/**
 * 在无序列表前面添加点
 */
let lis = document.getElementsByTagName('li')
for (let i = 0, length = lis.length; i < length; i++) {
  lis[i].innerHTML = '<em></em>' + lis[i].innerHTML
}
