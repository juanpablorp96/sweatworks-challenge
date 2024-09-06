
export const parseLocator = (pageObject) => {
    const pageObjectArray = pageObject.split(": ");
    return pageObjectArray;
};

export const formatDynamicLocator = (dynamicLocator, text) => {
    return dynamicLocator.replace('{}', text.replaceAll(' ', '-').toLowerCase());
};
