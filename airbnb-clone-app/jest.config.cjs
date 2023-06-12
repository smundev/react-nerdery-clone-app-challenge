module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['tsx', 'ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/*.test.(tsx|jsx)'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.Styled.tsx',
    '!src/**/*.Styled.ts',
    '!src/**/*.styled.tsx',
    '!src/**/*.styled.ts',
    '!src/components/Styles/**/*',
    '!src/api/**/*',
    '!src/components/Common/**/*',
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/styleMock.ts',
    '^react($|/.+)': '<rootDir>/node_modules/react$1',
  },
}
