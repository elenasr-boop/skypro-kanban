export let isAuthening = false;

export async function auth ( {login, password} ) {
    const response = await fetch('https://wedev-api.sky.pro/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            "login": login,
            "password": password,
        })
    });
    // const data = await response.json();

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

    return response.status;
}