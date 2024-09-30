export * from './time';
import * as fn from './address';
import * as format from './format';
import * as time from './time';

export const AddressFn = fn;

export const HelperFn = { ...format, ...time };
