const path = require('path');

const headers = require('./headers');
const request = require('./apicommand');
const config = require('../config');
const E = require('./errors');
const log = require('./logger');

module.exports = require('require-all')({
	dirname: path.join(__dirname, '/commands'),
	resolve: function (command) {
		return function (...args) {
			return headers.getHeaders()
				.then(function (headers) {
					return command(request, config, headers, ...args);
				})
				.catch(E.TokenExpiredError, function (err) {
					// login and try the same command once again
					log.debug('Request error, logging in and retrying');
					return headers.login()
						.then(function () {
							return headers.getHeaders()
								.then(function (headers) {
									return command(request, config, headers, ...args);
								});
						});

				})
				.catch(E.WrongCredentialsError, function (err) {
					return Promise.reject(err);
				});
		};
	}
});

module.exports.invalidateAuthHeader = function () {
	headers.invalidate();
};

module.exports.close = function () {
	require('./loginRateLimiter').stop();
	headers.stop();
};

module.exports.queue = async function (ids, fn) {
	const limitter = module.exports.getCurrentName.toString() === fn.toString() ? 40 : 200;
	const collection = await Promise.all(
		Array(Math.ceil(ids.length / limitter))
			.fill(null)
			.map((_, index) => index * limitter)
			.map((begin) => ids.slice(begin, begin + limitter))
			.map((chnk) => fn(...chnk))
	);
	return [].concat.apply([], collection);
}

module.exports.errors = E;
