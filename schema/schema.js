const graphql = require('graphql');
const _ = require('lodash');

const { 
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList
} = graphql;

const Cars = require('../data/models.json');
const Makes = require('../data/makes.json');
const CarOfTheWeeks = require('../data/carOfTheWeek.json');

const CarOfTheWeekType = new GraphQLObjectType({
  name: 'CarOfTheWeek',
  fields: () => ({
    modelId: { type: GraphQLInt },
    review: { type: GraphQLString },
    model: {
      type: CarType,
      resolve(parentValue, args) {
        return _.find(Cars, {id: parentValue.modelId});
      }
    }
  })
});

const MakeType = new GraphQLObjectType({
  name: 'Make',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    models: {
      type: new GraphQLList(CarType),
      resolve(parentValue, args) {
        return _.filter(Cars, {makeId: parentValue.id});
      }
    } 
  })
});

const CarType = new GraphQLObjectType({
  name: 'Car',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    imageUrl: { type: GraphQLString },
    make: { 
      type: MakeType,
      resolve(parentValue, args) {
        return _.find(Makes, { id : parentValue.makeId})
      }
    },
    carOfTheWeek: {
      type: CarOfTheWeekType,
      resolve(parentValue, args) {
        if(parentValue.id === CarOfTheWeeks.modelId){
          return CarOfTheWeeks;
        }
        return;
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    Car: {
      type: CarType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        return _.find(Cars, { id: args.id});
      }
    },
    Make: {
      type: MakeType,
      args: { id: { type: GraphQLInt }},
      resolve(parentValue, { id }) {
        return _.find(Makes, { id });
      }
    },
    CarOfTheWeek: {
      type: CarOfTheWeekType,
      resolve(parentValue, args) {
        return CarOfTheWeeks;
      }
    },
    AllMakes: {
      type: new GraphQLList(MakeType),
      resolve(parentValue, args){
        return Makes;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
