let baseUrl = 'http://localhost:5000/api/';
let mediaServerUrl = 'https://media.zypzap.com';

let gameApi = 'ae53737c7487406e94245666268a1bd6&search';

if (window.location.host === 'zypzap-dev.falconweb.app') {
  baseUrl = 'https://zypzap-api-dev.falconweb.app/api/';
} else if (window.location.host === 'zypzap-qa.falconweb.app') {
  baseUrl = 'https://zypzap-api-qa.falconweb.app/api/';
} else if (window.location.host === 'zypzap-staging.falconweb.app') {
  baseUrl = 'https://zypzap-api-staging.falconweb.app/api/';
} else if (window.location.host === 'zypzap.com') {
  baseUrl = 'https://api.zypzap.com/api/';
}

module.exports = { baseUrl, mediaServerUrl, gameApi };
