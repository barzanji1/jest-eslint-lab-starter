function capitalizeWords(input) {
    if (typeof input !== 'string') return '';

    return input
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function filterActiveUsers(users) {
    if (!Array.isArray(users)) return [];
    return users.filter((user) => user && user.isActive === true);
}

function logAction(action, username) {
    const timestamp = new Date().toISOString();
    return `User ${username} performed ${action} at ${timestamp}`;
}

module.exports = { capitalizeWords, filterActiveUsers, logAction };
