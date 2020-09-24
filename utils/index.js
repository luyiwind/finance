/**
 * 格式化日期
 */
import {PWD_REGEXP, TEL_REGEXP} from 'regexp'

const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}
/**
 * 获得年
 */
const getYear = () => new Date().getFullYear()
/**
 * 获得月
 */
const getMonth = () => {
    var m = new Date().getMonth() + 1
    return m > 10 ? m : '0' + m
}

/**
 * 获得当前日期
 */
const getDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return [year, month, day].map(formatNumber).join('-')
}

/**
 * 获得礼拜几
 */
const getWeek = (d) => {
    let date
    if (d) {
        date = new Date(d)
    } else {
        date = new Date()
    }
    var weekday = new Array(7)
    weekday[0] = '周日'
    weekday[1] = '周一'
    weekday[2] = '周二'
    weekday[3] = '周三'
    weekday[4] = '周四'
    weekday[5] = '周五'
    weekday[6] = '周六'
    return weekday[date.getDay()]
}

/**
 * 随机颜色
 */
const randomColor = () => {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    var color = '#' + r.toString(16) + g.toString(16) + b.toString(16)
    return color
}

/**
 * 电话 正则
 */
function validateTel(tel) {
    if (!TEL_REGEXP.test(tel)) {
        return '手机号格式不正确'
    }
}

/**
 * 密码 正则
 */
function validatePwd(pwd) {
    // if (!TEL_REGEXP.test(pwd)) {
    //     return '密码格式不正确'
    // }
    if (pwd.length < 4) {
        return '密码格式不正确'
    }
}

function validateCode(code) {
    // if (!TEL_REGEXP.test(pwd)) {
    //     return '密码格式不正确'
    // }
    if (code.length !== 4) {
        return '验证码不正确'
    }
}

/**
 * 降序函数
 * @param a
 * @param b
 * @returns {number}
 */
function desc(a, b) {
    return b - a
}

const formatDate = (time) => {
    const date = new Date(time)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return [year, month, day].map(formatNumber).join('-')
}

const setTitle = (title) => {
    wx.setNavigationBarTitle({title})
}

const setTheme = (isPrimary) => {
    const NAV_BAR_MAP = {
        RED: {
            backgroundColor: '#EB4D45',
            frontColor: '#ffffff'
        },
        WHITE: {
            backgroundColor: '#f8f8f8',
            frontColor: '#333333'
        },
    }
    wx.setNavigationBarColor(NAV_BAR_MAP[isPrimary ? 'RED' : 'WHITE'])
}

class Utils {
}

Utils.formatTime = formatTime
Utils.getDate = getDate
Utils.randomColor = randomColor
Utils.getWeek = getWeek
Utils.getYear = getYear
Utils.getMonth = getMonth
Utils.validateTel = validateTel
Utils.validatePwd = validatePwd
Utils.validateCode = validateCode
Utils.desc = desc
Utils.formatDate = formatDate
Utils.setTitle = setTitle
Utils.setTheme = setTheme

export default Utils

// module.exports = {
//     formatTime: formatTime,
//     getDate: getDate,
//     randomColor: randomColor,
//     getWeek: getWeek,
//     getYear,
//     getMonth,
//     validateTel,
//     validatePwd,
//     desc,
//     formatDate
// };
