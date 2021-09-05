export function setCookie<T extends string | number | boolean>(
    name: string,
    value: T,
    options: { path?: string; expires?: Date } = { path: '/', expires: new Date(Date.now() + 86400e3 * 3) },
) {
    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    const expires = options.expires?.toUTCString();

    updatedCookie += `; path=${options.path || '/'}; expires=${
        expires || new Date(Date.now() + 86400e3 * 3).toUTCString()
    }`;

    document.cookie = updatedCookie;
}
