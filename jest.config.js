module.exports = {
	collectCoverageFrom: [
		'**/*.{js,jsx,ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
	],
	setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
	// globals: {
	// 	'ts-jest': { tsConfig: 'tsconfig.json' }
	// },
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
		// '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
	},
	transformIgnorePatterns: [
		'/node_modules/',
		'^.+\\.module\\.(css|sass|scss)$',
	],
	moduleNameMapper: {
		'^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
	},
};
