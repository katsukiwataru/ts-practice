// @ts-ignore
declare global {
  namespace Express {
    interface SessionData {
      count?: number;
    }
  }
}
