import isPersonalIdentificationNumber from './isPersonalIdentificationNumber';

describe('isPersonalIdentificationNumber', () => {
	it('should be truthy if number', () => {
		expect(isPersonalIdentificationNumber('915603/4219')).toBeTruthy();
	});
	it('should be falsy if not phone number', () => {
		expect(isPersonalIdentificationNumber('122')).toBeFalsy();
	});
});
