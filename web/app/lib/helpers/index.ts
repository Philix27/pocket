export * from './time';
import * as format from './format';
import * as time from './time';


export const HelperFn = { ...format, ...time };
