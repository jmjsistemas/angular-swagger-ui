/*
 * Orange angular-swagger-ui - v0.6.2
 *
 * (C) 2015 Orange, all right reserved
 * MIT Licensed
 */
'use strict';

angular
	.module('swaggerUi')
	.config(function (swaggerTranslatorProvider) {

		swaggerTranslatorProvider
			.addTranslations('br', {
				infoContactCreatedBy: 'Criado por {{name}}',
				infoContactUrl: 'Veja mais em',
				infoContactEmail: 'Entre em contato com o desenvolvedor',
				infoLicense: 'License:',
				infoBaseUrl: 'URL BASE',
				infoApiVersion: 'API VERSION',
				infoHost: 'HOST',
				endPointToggleOperations: 'Abrir / Ocultar',
				endPointListOperations: 'Listar operações',
				endPointExpandOperations: 'Expandir operações',
				operationDeprected: 'Aviso: Descontinuado',
				operationImplementationNotes: 'Notas de implementação',
				externalDocs: 'Documentos externos',
				headers: 'Cabeçalhos de resposta',
				headerName: 'Header',
				headerDescription: 'Descrição',
				headerType: 'Type',
				parameters: 'Parâmetros',
				parameterName: 'Parameter',
				parameterValue: 'Value',
				parameterDescription: 'Descrição',
				parameterType: 'Parameter type',
				parameterDataType: 'Data type',
				parameterOr: ' ou ',
				parameterRequired: '(obrigatório)',
				parameterModel: 'Model',
				parameterSchema: 'Exemplo de valor',
				parameterContentType: 'Parameter content type',
				parameterDefault: '{{default}} (padrão)',
				parameterSetValue: 'Clique para definir como valor do parâmetro',
				responseClass: 'Classe de resposta (status {{status}})',
				responseModel: 'Model',
				responseSchema: 'Exemplo de valor',
				responseContentType: 'Tipo de conteúdo de resposta',
				responses: 'Mensagens de resposta',
				responseCode: 'código de status HTTP',
				responseReason: 'Reason',
				responseHide: 'Ocultar resposta',
				modelOptional: 'opcional',
				modelOr: 'ou',
				explorerUrl: 'Request URL',
				explorerBody: 'Corpo da resposta',
				explorerCode: 'Código de resposta',
				explorerHeaders: 'Cabeçalhos de resposta',
				explorerLoading: 'Carregando ...',
				explorerTryIt: 'Experimente!',
				errorNoParserFound: 'Nenhum analisador encontrado para a especificação OpenApi do tipo {{type}}',
				errorParseFailed: 'Falha ao analisar a especificação OpenApi: {{message}}',
				errorJsonParse: 'Falha ao analisar o JSON',
				errorNoYamlParser: 'Nenhum analisador YAML encontrado, inclua a biblioteca js-yaml',
				authRequired: 'Autorização necessária',
				authAvailable: 'Autorizações disponíveis',
				apiKey: 'autorização da chave da API',
				authParamName: 'Name',
				authParamType: 'In',
				authParamValue: 'Value',
				basic: 'autorização básica',
				authLogin: 'Login',
				authPassword: 'Senha',
				oauth2: 'autorização oAuth2',
				authOAuthDesc: 'Os escopos são usados ​​para conceder a um aplicativo diferentes níveis de acesso aos dados em nome do usuário final. Cada API pode declarar um ou mais escopos. A API requer os seguintes escopos. Selecione quais você deseja conceder. ',
				authAuthorizationUrl: 'URL de autorização',
				authFlow: 'Fluxo',
				authTokenUrl: 'URL do token',
				authScopes: 'Scopes',
				authDone: 'Concluído',
				authAuthorize: 'Authorize',
				authClientId: 'ID do cliente',
				authClientSecret: 'Segredo do cliente',
				authLogout: 'Logout',
				authLogged: 'Você está conectado no momento'
			});

	});