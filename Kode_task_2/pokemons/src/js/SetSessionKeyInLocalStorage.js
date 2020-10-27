// Заглушка: в идеале sessionKey приходит с сервера
export default function setSessionKeyInLocalStorage() {
    const sessionKey = 'ca2c6c862d4058c636cbf41bcacff0d8'; // hash: MD5(login + password).toString();
    localStorage.setItem('sessionKey', sessionKey);
}