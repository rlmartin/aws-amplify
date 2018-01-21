import { ConsoleLogger as Logger } from '../Common';

const logger = new Logger('CredentialsManagerClass');

class CredentialsManagerClass {
  onHubCapsule(capsule) {
    const { channel, payload, source } = capsule;
    logger.debug('on hub capsule channel ' + channel);

    if (channel === 'credentials') {
        console.log("payload: " + JSON.stringify(payload));
    }
}
}