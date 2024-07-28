export let isAuthening = false;
export let userName = "";
export let userMail = "";
export let token = "";
export let cardList = [];

export async function auth ( {login, password} ) {
    const response = await fetch('https://wedev-api.sky.pro/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            "login": login,
            "password": password,
        })
    });
    const data = await response.json();

    if (response.status === 201) {
        userName = data.user.name;
        userMail = data.user.login;
        token = data.user.token;
    }

    return response.status;
}

export async function register ( {login, name, password}) {
    const response = await fetch('https://wedev-api.sky.pro/api/user', {
        method: 'POST',
        body: JSON.stringify({
            "login": login,
            "name": name,
            "password": password,
        })
    });

    const data = await response.json();

    if (response.status === 201) {
        userName = data.user.name;
        userMail = data.user.login;
        token = data.user.token;
    }

    return response.status;
}

export async function getTodos () {
    const response = await fetch('https://wedev-api.sky.pro/api/kanban', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });

    const data = response.json();

    return data;
}