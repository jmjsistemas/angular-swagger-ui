const myApp = angular.module('myApp', ['swaggerUi', 'swaggerUiAuthorization'])
	.config(function ($anchorScrollProvider) {
		$anchorScrollProvider.disableAutoScrolling();
	})
	.config(function (swaggerTranslatorProvider) {
		swaggerTranslatorProvider
			.setLanguage('br').
			addTranslations('br', {
				appTitle: 'angular-swagger-ui',
				explore: 'Explorar',
				loading: 'carregando...',
				error: 'Falha ao gerar Swagger-UI: {{code}} {{message}}',
				french: 'francês',
				portuguese: 'português',
				english: 'inglês',
				downloadLabel: 'baixar!'
			}).addTranslations('en', {
				appTitle: 'angular-swagger-ui',
				explore: 'Explore',
				loading: 'loading...',
				error: 'Failed to generate Swagger-UI: {{code}} {{message}}',
				french: 'french',
				english: 'english',
				portuguese: 'portuguese',
				downloadLabel: 'download it!'
			})
			.addTranslations('fr', {
				appTitle: 'angular-swagger-ui',
				explore: 'Explorer',
				loading: 'Chargement ...',
				error: 'Impossible de générer Swagger-UI: {{code}} {{message}}',
				french: 'français',
				english: 'anglais',
				portuguese: 'portugais',
				downloadLabel: 'Téléchargez le !'
			});
	})
	.config(function (swaggerUiAuthProvider) {
		swaggerUiAuthProvider.configuration({
			redirectUrl: 'http://orange-opensource.github.io/angular-swagger-ui/oauth2-redirect.html',
			api_key_auth: {
				apiKey: 'myApiKey'
			},
			user_auth: {
				clientId: 'myClientId',
				clientSecret: 'myClientSecret'
			},
			basic_auth: {
				login: 'myLogin',
				password: 'myPassword'
			}
		});
	})
	.controller('MyCtrl', function ($scope, swaggerTranslator, swaggerUiAuth) {
		// init form
		$scope.isLoading = false;
		$scope.url = $scope.swaggerUrl = 'http://simplifi.jmjsistemas.com.br/financas/v2/api-docs?group=1.0.0';
		// error management
		$scope.myErrorHandler = function (message, code) {
			alert(swaggerTranslator.translate('error', {
				code: code,
				message: message
			}));
		};
		$scope.setFr = function () {
			swaggerTranslator.useLanguage('fr');
		};
		$scope.setBr = function () {
			swaggerTranslator.useLanguage('br');
		};
		$scope.setEn = function () {
			swaggerTranslator.useLanguage('en');
		};
		$scope.getLang = function () {
			return swaggerTranslator.language();
		};
	}); 