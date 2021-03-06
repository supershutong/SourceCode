// 节流：指定时间内只触发一次，多次触发不执行。
// 核心：开关锁
function throttle(fn, delay) {
  let flag = false,
    timer = null // 未执行
  return function (...args) {
    if (flag) return
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
      flag = true // 核心
    }, delay)
  }
}

// 测试用例
throttle(fn, 500)
