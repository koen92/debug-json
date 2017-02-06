import debug from 'debug';

import jsonFormatArgs from '../src/jsonFormatArgs';

debug.formatArgs = jsonFormatArgs;

// TODO convert these into tests
/* eslint-disable */
function demo() {

  const firstLogger = debug('json:direct');
  firstLogger('logger, simple');
  firstLogger('logger, attachments', 'attached');
  firstLogger('logger, formatting args %%s, %s', 'percent-s');

  const x = { key: 'value' };
  const y = { x };
  x.y = y;
  firstLogger('logger, recursive arg with %%j, %j', x);


  firstLogger('logger, many args, %s', 'inline', 'attached');

  const secondDebug = require('debug');
  const secondLogger = secondDebug('json:other');

  secondLogger('logger, 0 args');
}

console.log('debug.formatters.s', debug.formatters.s);
demo();
/* eslint-enable */
