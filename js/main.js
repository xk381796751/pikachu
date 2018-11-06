!function () {
	let duration = 50
	
	$('.actions').on('click', 'button', (e) => {
		let $button = $(e.currentTarget)
		let speed = $button.attr('data-speed')
		$button.addClass('active').siblings('.active').removeClass('active')
		switch (speed) {
			case 'slow':
				duration = 100
				break
			case 'normal':
				duration = 50
				break
			case 'fast':
				duration = 10
				break
		}
	})

	function writeCode(prefix, code, fn) {
		let container = document.querySelector('#code')
		let styleTag = document.querySelector('#styleTag')
		let n = 0
		setTimeout(function run() {
			n += 1
			container.innerHTML = code.substring(0, n)
			styleTag.innerHTML = code.substring(0, n)
			container.scrollTop = container.scrollHeight
			if (n < code.length) {
				setTimeout(run, duration)
			} else {
				fn && fn.call()
			}
		}, duration)
	}

	let code = `
/*
 * 首先，需要准备皮卡丘的皮
 */	
.preview{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FEE433;
}
.wrapper {
  width: 100%;
  height: 165px;
  position: relative;
}
/*
 * 接下来，画皮卡丘的鼻子
 */	
.nose {
  width: 0;
  height: 0;
  border: 11px solid;
  border-color: black transparent transparent;
  border-radius: 11px;
  position: absolute;
  left: 50%;
  top: 36px;
  margin-left: -11px;
}
/*
 * 首先，需要准备皮卡丘的眼睛
 */	
.eye {
  width: 49px;
  height: 49px;
  background: #2e2e2e;
  position: absolute;
  top: 0;
  border-radius: 50%;
  border: 2px solid #000;
}
/*
 * 眼睛里面的珠子
 */	
.eye::before {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background: white;
  position: absolute;
  border-radius: 50%;
  top: -1px;
  left: 6px;
  border: 2px solid #000;
}
/*
 * 左眼在左边
 */	
.eye.left {
  right: 50%;
  margin-right: 68px;
}
/*
 * 右眼在右边
 */
.eye.right {
  left: 50%;
  margin-left: 68px;
}
/*
 * 然后画皮卡丘的脸
 */
.face {
  width: 68px;
  height: 68px;
  background: #FC0D1C;
  border: 2px solid #000;
  border-radius: 50%;
  position: absolute;
  top: 85px;
}
/*
 * 将脸放到正确的位置
 */
.face.left {
  right: 50%;
  margin-right: 110px
}

.face.right {
  left: 50%;
  margin-left: 110px
}
/*
 * 上嘴唇
 */
.upperLip {
  height: 25px;
  width: 80px;
  background: #FEE433;
  border: 2px solid black;
  position: absolute;
  top: 55px;
}
.upperLip.left {
  right: 50%;
  border-bottom-left-radius: 40px 25px;
  border-top: none;
  border-right: none;
  transform: rotate(-20deg)
}
.upperLip.right {
  left: 50%;
  border-bottom-right-radius: 40px 25px;
  border-top: none;
  border-left: none;
  transform: rotate(20deg)
}
/*
 * 下嘴唇
 */
.lowerLip-wrapper {
  position: absolute;
  left: 50%;
  bottom: -10px;
  margin-left: -151px;
  width: 302px;
  height: 110px;
  overflow: hidden;
}
.lowerLip {
  width: 302px;
  height: 3500px;
  background: #990513;
  border-radius: 200px/2000px;
  border: 2px solid black;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}
/*
 * 小舌头
 */
.lowerLip::before {
  content: '';
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #FC4A62;
  position: absolute;
  bottom: -14px;
  left: 50%;
  margin-left: -50px;
}
/*
 * 好了，这支皮卡丘送给你！
 */
`
	writeCode('', code)	
}.call()