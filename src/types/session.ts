// @ts-ignore
import Express from 'express';

declare global {
  namespace Express {
    interface SessionData {
      count?: number;
    }
  }
}
