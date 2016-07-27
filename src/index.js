import debug from 'debug';

import jsonFormatArgs from './jsonFormatArgs';
import { formatters } from './formatters';

debug.formatArgs = jsonFormatArgs;

debug.formatters = {
  ...debug.formatters,
  ...formatters('s', 'd', 'j', '%'),
};
