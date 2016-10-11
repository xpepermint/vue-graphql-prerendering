import {graphql} from 'graphql';
import {Schema} from './schema';

/*
* GraphQL schema.
*/

export {Schema};

/*
* GraphQL manager.
*/

export class Graph {

  /*
  * Class constructor.
  */

  constructor(ctx) {
    this._ctx = ctx;
  }

  /*
  * A getter which returns the application context.
  */

  get ctx() {
    return this._ctx;
  }

  /*
  * Runs GraphQL query.
  */

  async query(query, vars=null) {
    return await graphql(Schema, query, null, this.ctx, vars);
  }

}
