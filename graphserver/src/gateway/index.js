import express from 'express';
import cors from 'cors';
import {middleware as graphqlMiddleware} from './middleware/graphql';
import {middleware as routesMiddleware} from './middleware/routes';

/*
* HTTP server.
*/

export class Gateway {

  /*
  * Class constructor.
  */

  constructor() {
    this._app = null;
    this._server = null;
  }

  /*
  * A getter which returns the Express application instance.
  */

  get app() {
    return this._app;
  }

  /*
  * A getter which returns the HTTP server instance.
  */

  get server() {
    return this._server;
  }

  /*
  * Starts the server.
  */

  async listen() {
    if (this._server) return;

    await new Promise((resolve) => {
      this._app = express();
      this._app.use(cors());
      this._app.use('/graphql', graphqlMiddleware(this));
      this._app.use('/', routesMiddleware(this));

      this._server = this._app.listen(4444, 'localhost', resolve);
    });
  }

  /*
  * Stops the server.
  */

  async close() {
    if (!this._server) return;

    await new Promise((resolve) => {
      this._server.close(() => {
        this._server = null;
        this._app = null;

        resolve();
      });
    });
  }

}
