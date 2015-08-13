import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLList,
	GraphQLString,
} from 'graphql';

import { PersonType } from './schemaType';
import { getClients } from './controller';

let schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			people: {
				type: new GraphQLList(PersonType),
				resolve: () => getClients()
			},
			count: {
				type: GraphQLInt,
				resolve: () => 20
			}
		}
	})
});

export default schema;