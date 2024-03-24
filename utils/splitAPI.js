export const splitAPI = (api) => {
    const parts = api.split("/");
    const characterID = parts[parts.length - 1]
    return characterID
}

