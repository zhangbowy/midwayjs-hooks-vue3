import { Api, Get } from '@midwayjs/hooks';

export const getDate = Api(Get(), async (): Promise<string> => {
  return new Date().toString();
});
