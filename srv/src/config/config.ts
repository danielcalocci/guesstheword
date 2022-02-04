import * as dotenv from 'dotenv';

dotenv.config();

const Config = {
  application: {
    PORT: 3000
  },
  mailChimp: {
    apiKey: process.env.MAILSHIMPAPIKEY as string,
    serverPrefix: process.env.MAILSHIMPSERVERPREFIX as string
  },
  mockApi: {
    url: process.env.MOCKAPIURL as string
  }

};

export default Config;
