const graphql = require("graphql");
const request = require("sync-request");

const converter = require("graphql-2-json-schema");

module.exports = function (graphUrl, graphToken, graphRefToken) {
	const requestBody = {
		query: graphql.introspectionQuery,
	};

	const responseBody = request("POST", graphUrl, {
		json: requestBody,
		headers: {
			"x-connector-token": graphToken,
			"x-connector-refresh-token": graphRefToken,
			"x-connector-auth-request-type": "LOCAL_STORAGE",
		},
	}).getBody("utf8");

	const introspectionResponse = JSON.parse(responseBody);

	const jsonSchema = converter.fromIntrospectionQuery(
		introspectionResponse.data
	);
	const graphQLSchema = graphql.buildClientSchema(introspectionResponse.data, {
		assumeValid: true,
	});

	return {
		jsonSchema,
		graphQLSchema,
	};
};
