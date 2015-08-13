import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLList,
	GraphQLString,
} from 'graphql';

export const PersonType = new GraphQLList({
	name: 'Person',
	description: 'Describe a Person',
	fields: () => ({
		name: {
			type: GraphQLString,
			description: 'Person name'
		},
		age: {
			type: GraphQLInt,
			description: 'Person age'
		},
		address: {
			address_1: {
				type: GraphQLString,
				description: 'Describe person address 1'
			},
			address_2: {
				type: GraphQLString,
				description: 'Describe person address 2'
			}
		}
	})
});