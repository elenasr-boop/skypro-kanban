export let isAuthening = false;
export let token = localStorage.getItem("token");
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
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.user.token);
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
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.user.token);
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

export async function createTodo ( {title, topic, status, description, date, setCards} ) {
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

    setCards(data.tasks);

    return res;
}

export async function deleteTodo ( {id, setCards} ) {
    const res = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });

    const data = await res.json();

    setCards(data.tasks);
    
    return res;
}