export const login = (params) => {
    return fetch("/api/login",
        {
            method: "POST",
            body: JSON.stringify(params)
        }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    });
}

export const logout = () => {
    return fetch("/api/logout",
        {
            method: "GET",
        }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    });
}

export const forgotPassword = (params) => {
    return fetch("/api/forgotPassword",
        {
            method: "POST",
            body: JSON.stringify(params)
        }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    });
}

export const resetPassword = (params) => {
    return fetch("/api/resetPassword",
        {
            method: "POST",
            body: JSON.stringify(params)
        }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    });
}

export const registerClub = (params) => {
    return fetch('/api/registerClub', {
        method: 'POST',
        body: JSON.stringify(params)
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    });
}

export const updateClub = (params) => {
    return fetch('/api/updateClub', {
        method: 'POST',
        body: JSON.stringify(params)
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    });
}

export const getUserClubs = () => {
    return fetch(`/api/getUserClubList`, {
        method: 'GET',
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    });
}

export const getClubsList = () => {
    return fetch('/api/getClubList', {
        method: 'GET',
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    });
}

export const getUserData = () => {
    return fetch('/api/getUserData', {
        method: 'GET',
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    });
}

export const assignClubsToContest = (params) => {
    return fetch('/api/assignClubsToContest', {
        method: 'POST',
        body: JSON.stringify(params)
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    });
}
export const getContestList = () => {
    return fetch('/api/getContests', {
        method: 'GET',
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    });
}