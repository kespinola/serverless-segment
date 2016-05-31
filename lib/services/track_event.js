import Promise from 'bluebird';
import docClient from './../config/dynomo';
import { v4 } from 'node-uuid';
const stage = process.env.SERVERLESS_STAGE;
const projectName = process.env.SERVERLESS_PROJECT;
const eventTable = `${projectName}-event-${stage}`;

const trackEvent = event => new Promise((resolve, reject) => {
  const params = {
    TableName: eventTable,
    Item: Object.assign({}, event, { id: `${event.timestamp}-${v4()}` }),
  };

  docClient.put(params, (err, data) => {
    if (err) {
      return reject(err);
    }
    return resolve(data);
  });
});

export default trackEvent;
