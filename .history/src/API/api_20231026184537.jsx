import snoowrap from 'snoowrap';

const t = new snoowrap({
    userAgent: 'my user agent',
    clientId: 'T6lsC2eBX5aOl8xLrcNlvA',
    clientSecret: 'bGTXYS_zuiIoDKRBGNC1F7TKXPuEug',
    refreshToken: '1000186783639-4Z4Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z'
});

export var authenticationURL = snoowrap.getAuthUrl({
    clientId: 'T6lsC2eBX5aOl8xLrcNlvA',
    scope: [],
    redirectUri: 'http://localhost:5173/',
    permanent: true,
    state: 'mini-r' // a random string, this could be validated when the user is redirected back
});

window.location.href = authenticationURL;
