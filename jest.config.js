module.exports = {
    preset: 'ts-jest',
    roots: ['<rootDir>/src'],
    transform: {
      '\\.(ts|tsx)?$': 'ts-jest',
    },
    testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'css', 'node'],
    moduleNameWrapper: {
      "\\.(css)$": "identity-obj-proxy",
    },
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect',
      '@testing-library/react/dont-cleanup-after-each'
    ]
}
