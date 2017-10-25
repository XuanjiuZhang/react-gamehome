const timeUtil = {
  getDate(unixTime) {
    const date = new Date(unixTime)
    return `${date.getFullYear().toString().substring(2)}/${date.getMonth() + 1}/${date.getDate()}`
  },
  getTime(unixTime) {
    const date = new Date(unixTime)
    const hours = date.getHours()
    const formatedHours = hours >= 10 ? hours : '0' + hours
    const minutes = date.getMinutes()
    const formatedMinutes = minutes >= 10 ? minutes : '0' + minutes
    const seconds = date.getSeconds()
    const formatedSeconds = seconds >= 10 ? seconds : '0' + seconds
    return `${formatedHours}:${formatedMinutes}:${formatedSeconds}`
  },
  getDateTime(unixTime) {
    const date = new Date(unixTime)
    const hours = date.getHours()
    const formatedHours = hours >= 10 ? hours : '0' + hours
    const minutes = date.getMinutes()
    const formatedMinutes = minutes >= 10 ? minutes : '0' + minutes
    const seconds = date.getSeconds()
    const formatedSeconds = seconds >= 10 ? seconds : '0' + seconds
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${formatedHours}:${formatedMinutes}:${formatedSeconds}`
  },
  classicBullRules(rule) {
    // 玩法：0斗公牛；1抢庄；2牛牛庄家；3牌大坐庄；4轮庄；5霸王庄
    const ruleTextList = ['斗公牛', '抢庄', '牛牛庄家', '牌大坐庄', '轮庄', '霸王庄']
    const ruleText = ruleTextList[rule.ruleType]
    const visibleText = '可见牌' + rule.showCardCount + '张'
    return {
      ruleName: `经典牛牛/${ruleText}/${visibleText}`,
      headUrl: 'img/my/bull-icon.png',
      name: '经典牛牛'
    }
  },
  fightBullRules(rule) {
    const visibleText = '可见牌' + rule.showCardCount + '张'
    return {
      ruleName: `斗公牛/${visibleText}`,
      headUrl: 'img/my/bull-icon.png',
      name: '斗公牛'
    }
  },
  majiangRules(rule) {
    const ruleTextList = ['一码全中', '两个码', '四个码', '六个码', '八个码']
    const ruleText = ruleTextList[rule.ruleType + 1]
    return {
      ruleName: `红中麻将/${ruleText}/${rule.turns + '回合'}`,
      headUrl: 'img/my/majiang-icon.png',
      name: '红中麻将'
    }
  }
}

function screenOrientation({ changeOrientation }) {
  var supportOrientation = (typeof window.orientation === 'number' &&
    typeof window.onorientationchange === 'object');

  var init = function() {
    let orientation;
    const updateOrientation = function() {
      const rootEle = document.getElementById('root')
      orientation = (rootEle.offsetWidth > rootEle.offsetHeight) ? 'landscape' : 'portrait'
      changeOrientation(orientation)
    };

    if (supportOrientation) {
      window.addEventListener('orientationchange', updateOrientation, false);
    } else {
      // 监听resize事件
      window.addEventListener('resize', updateOrientation, false);
    }

    updateOrientation();
  };

  window.addEventListener('DOMContentLoaded', init, false);
}

export default timeUtil
export { screenOrientation }