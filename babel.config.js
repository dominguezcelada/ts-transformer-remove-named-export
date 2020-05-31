module.exports = {
	env: {
		test: {
			presets: [
				'@babel/preset-env',
				'@babel/preset-typescript'
			],
			plugins: [
				[
					'@babel/plugin-transform-runtime',
					{
						regenerator: true
					}
				]
			]
		}
	}
};