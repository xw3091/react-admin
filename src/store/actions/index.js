// 保存登录信息
export function saveLogin(name, value) {
    return {
        type: 'SAVE_DATA',
        name,
        value
    }
}

// 保存数据
export function saveData(name, value) {
    return {
        type: 'SAVE_DATA',
        name,
        value
    }
}