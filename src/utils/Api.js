class Api {
    constructor(config) {
        this.baseUrl = config.baseUrl;
        this.headers = config.headers;
    }

    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'GET',
            headers: this.headers
        })
            .then(this._getResponseData);
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: this.headers
        })
            .then(this._getResponseData);
    }

    patchUserInfo({ name, about }) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
            .then(this._getResponseData);
    }

    postNewCard(name, link) {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(this._getResponseData);
    }

    deleteCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this.headers,
        })
            .then(this._getResponseData);
    }

    putLike(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this.headers,
        })
            .then(this._getResponseData);
    }

    deleteLike(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this.headers,
        })
            .then(this._getResponseData);
    }

    patchAvatar({ link }) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: link
            })
        })
            .then(this._getResponseData);
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
    headers: {
        authorization: '7a630e5f-f0b7-4c93-a00f-a1198348af6d',
        'Content-Type': 'application/json'
    }
});
