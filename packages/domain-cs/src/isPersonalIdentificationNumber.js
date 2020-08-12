import createValidation from '@validarium/core/src/createValidation';
import isPersonalIdentificationNumber from '@validarium/predicates/src/isPersonalIdentificationNumber';
import m from './messages';

/**
Checks if the value is a valid personal identification number
@returns {Object} {message Object} when predicate fails or null when pass

@category string
@example
> isPersonalIdentificationNumber('980123456')
null

> isPersonalIdentificationNumber('23')
{message Object}

@alias module:validations.visPhoneNumber
*/
export default createValidation(isPersonalIdentificationNumber, m.isPersonalIdentificationNumber);
