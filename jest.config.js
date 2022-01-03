module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    setupFilesAfterEnv: ['jest-extended'],
    testTimeout: 15000,
    transform: {
        '^.+\\.(ts)$': 'ts-jest'
    },
    testMatch: ['**/test/**/*.+(ts|js)'],
    verbose: true,
    rootDir: 'test',
    moduleNameMapper: {
        '^~support/(.*)$': '<rootDir>/../support/$1',
        '^~test/(.*)$': '<rootDir>/../test/$1',
        '^~resources/(.*)$': '<rootDir>/../resources/$1'
    }
};
