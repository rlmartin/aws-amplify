import { AWS } from '../Common/Facet';
import { ConsoleLogger as Logger } from '../Common';

const logger = new Logger('CredentialsManagerClass');

class CredentialsManagerClass {
    constructor() {
        this.funcs = [];
    }

    onCredentialChange(func) {
        if (typeof func !== "function") throw 'CredentialsManager only accepts functions.';
        this.funcs.push(func);
    }

    onHubCapsule(capsule) {
        const { channel, payload, source } = capsule;
        logger.debug('on hub capsule channel ' + channel);

        if (channel === 'credentials') {
            AWS.config.region = 'us-east-1';
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: 'us-east-1:3dfee42a-8b51-41e5-93a2-859ce6ef9ce9',
                Logins: {
                    'graph.facebook.com': data.accessToken.toString()
                }
            }, alert(data.accessToken.toString()) // I am able to see the access token so I know i am getting it succesfully
            );
            AWS.config.credentials.get(error => {
                if (error) {
                    logger.error(error);
                } else {
                    this.funcs.forEach(f => f());
                }
            });
        }
    }
}

export default CredentialsManagerClass;