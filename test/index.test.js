/* eslint-env jest */
const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords(input)', () => {
    test('capitalizes the first letter of each word', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('handles multiple spaces', () => {
        expect(capitalizeWords('hello   world')).toBe('Hello World');
    });

    test('handles leading/trailing spaces', () => {
        expect(capitalizeWords('  hello world  ')).toBe('Hello World');
    });

    test('returns empty string for empty input', () => {
        expect(capitalizeWords('')).toBe('');
    });
});

describe('filterActiveUsers(users)', () => {
    test('returns only active users', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false }
        ];

        expect(filterActiveUsers(users)).toEqual([
            { name: 'Alice', isActive: true }
        ]);
    });
});

describe('logAction(action, username)', () => {
    test('returns formatted log string', () => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2024-11-27T12:00:00Z'));

        expect(logAction('login', 'Alice'))
            .toBe('User Alice performed login at 2024-11-27T12:00:00.000Z');

        jest.useRealTimers();
    });
});
