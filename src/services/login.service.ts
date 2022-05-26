const LocalStorageUserLogin = 'isUserLogin';

export const Login = () => {
    localStorage.setItem(LocalStorageUserLogin, 'true');
}

export const Logout = () => {
    localStorage.setItem(LocalStorageUserLogin, 'false');
}

export const IsUserLogin = () => {
    const userLogin = localStorage.getItem(LocalStorageUserLogin);
    if (!userLogin) {
        localStorage.setItem(LocalStorageUserLogin, 'false');
        return false
    } else {
        return userLogin === 'true';
    }
}