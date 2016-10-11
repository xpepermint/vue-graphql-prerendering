import express from 'express';

export function middleware(ctx) {
  let router = express.Router({
    mergeParams: true
  });

  return router;
}
