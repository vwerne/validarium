import { test, anyPass } from 'ramda';
import { isNilOrEmptyString } from 'ramda-extension';

/**
@alias module:predicates.isPersonalIdentificationNumber
*/
export default anyPass([isNilOrEmptyString, test(/^\d{9}$/)]);
