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

// Get the 'code' querystring param (assuming the user was redirected from reddit)
var code = new URL(window.location.href).searchParams.get('code');

snoowrap.fromAuthCode({
    code: code,
    userAgent: 'my user agent',
    clientId: 'T6lsC2eBX5aOl8xLrcNlvA',
    redirectUri: 'http://localhost:5173/'
}).then(r => {
    // Now we have a requester that can access reddit through the user's account
    return r.getHot().then(posts => {
        // do something with posts from the front page
        console.log(posts);
    });
});