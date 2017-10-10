import assert from 'assert';
import decamelize from '../decamelize';
console.log(decamelize);

describe('string operation', function () {
    it('string decamelize', function () {
        const str = 'aboutYouNeedToTest';
        const res = decamelize(str, '-');
        assert.equal(res, 'about-you-need-to-test', `from ${str} to ${res}`)
    })
})