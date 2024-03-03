export function formatCamelCaseToUpper(string) {
    const upperCaseString = string.toUpperCase();
    const formattedString = upperCaseString.replace(/([A-Z])/g, '_$1');

    return formattedString.replace(/^_/, '');
}