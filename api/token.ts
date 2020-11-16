import { NowRequest, NowResponse } from '@vercel/node';
import { PluggyClient } from 'pluggy-sdk';

const { PLUGGY_CLIENT_ID, PLUGGY_CLIENT_SECRET } = process.env;

export default function (_: NowRequest, res: NowResponse) {
  const pluggyClient = new PluggyClient({
    clientId: PLUGGY_CLIENT_ID,
    clientSecret: PLUGGY_CLIENT_SECRET,
  });

  pluggyClient.createConnectToken().then(data => res.json(data));
}
