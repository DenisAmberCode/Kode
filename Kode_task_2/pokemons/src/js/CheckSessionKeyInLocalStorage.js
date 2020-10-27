// Заглушка: в идеале sessionKeyValid приходит с сервера
export default function checkSessionKeyInLocalStorage() {
    const sessionKeyValid = 'ca2c6c862d4058c636cbf41bcacff0d8'; // hash: MD5(login + password).toString();
    const sessionKey = localStorage.getItem('sessionKey');
    return ( sessionKeyValid === sessionKey) ? true : false;
}