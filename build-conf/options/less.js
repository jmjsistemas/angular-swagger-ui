module.exports = {
	dev: {
		files: {
			'src/css/swagger-ui.css': 'src/less/main.less',
			'src/css/bootstrap.css': 'bower_components/bootstrap-less-only/less/bootstrap.less'
		}
	},
	distcompressed: {
		options: {
			cleancss: true,
			compress: true
		},
		files: {
			'dist/css/swagger-ui.min.css': 'src/less/main.less'
		}
	},
	distuncompressed: {
		options: {
			cleancss: true
		},
		files: {
			'dist/css/swagger-ui.css': 'src/less/main.less'
		}
	}
}