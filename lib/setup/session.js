const session = require('express-session'); //(Object.assign({ secret: config.secret }, config.session));
const debug = require('debug')('server-connect:setup:session');
const config = require('./config');
const options = config.session;

if (!options.secret) {
    options.secret = config.secret;
}

debug('init session store %o', options.store);

if (options.store.$type == 'redis') { // https://www.npmjs.com/package/connect-redis
    const RedisStore = require('connect-redis')(session);
    options.store = new RedisStore(Object.assign({
        client: global.redisClient
    }, options.store));
} else if (options.store.$type == 'file') { // https://www.npmjs.com/package/session-file-store
    const FileStore = require('session-file-store')(session);
    options.store = new FileStore(options.store);
} else if (options.store.$type == 'database') { // https://www.npmjs.com/package/connect-session-knex
    const KnexStore = require('connect-session-knex')(session);
    options.store = new KnexStore(options.store);
} else {
    const MemoryStore = require('../core/memoryStore')(session);
    options.store = new MemoryStore(options.store);
}

module.exports = session(options);