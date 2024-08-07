export let isAuthening = false;
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

    return data;
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

    return data;
}

export async function getTodos ( {token} ) {
    const response = await fetch('https://wedev-api.sky.pro/api/kanban', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });

    const data = response.json();

    return data;
}

export async function createTodo ( {title, topic, status, description, date, token} ) {
    const res = await fetch('https://wedev-api.sky.pro/api/kanban', {
        method: 'POST', 
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            "title": title,
            "topic": topic,
            "status": status,
            "description": description,
            "date": date,
        })
    })

    const data = await res.json();

    return data;
}

export async function deleteTodo ( {id, token} ) {
    const res = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });

    const data = await res.json();
    
    return data;
}