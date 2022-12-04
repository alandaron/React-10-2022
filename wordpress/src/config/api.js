const apiUrl = "https://localhost/wordpress/wp-json/wc/v3/";
const auth =
	"Basic Y2tfNjI1ZmM1N2E2ZjA4MTM2MmM4Yzg2MDA4ODZjMWIyMmM5ZDc2N2Y3ZTpjc19kZTEwNWQzMDdkZDQzMWMwOTdkYzE2OWUwZDM5ZDg1NzNlMzIwYmZj";
const headersData = {
	Authorization: auth,
	"Content-Type": "application/json",
};
/**
 * GET requests
 *
 * @param  {String} endpoint
 * @param  {Object} params
 *
 * @return {Object}
 */

const get = (endpoint, params = {}) => {
	return fetch(apiUrl + endpoint + "?" + new URLSearchParams(params), {
		method: "GET",
		headers: headersData,
	}).then((res) => res.json());
};

/**
 * POST requests
 *
 * @param  {String} endpoint
 * @param  {Object} data
 * @param  {Object} params
 *
 * @return {Object}
 */

const post = (endpoint, data, params = {}) => {
	return fetch(apiUrl + endpoint + "?" + new URLSearchParams(params), {
		method: "POST",
		headers: headersData,
		body: JSON.stringify(data),
	}).then((res) => res.json());
};

/**
 * PUT requests
 *
 * @param  {String} endpoint
 * @param  {Object} data
 * @param  {Object} params
 *
 * @return {Object}
 */

const put = (endpoint, data, params = {}) => {
	return fetch(apiUrl + endpoint + "?" + new URLSearchParams(params), {
		method: "PUT",
		headers: headersData,
		body: JSON.stringify(data),
	}).then((res) => res.json());
};

/**
 * DELETE requests
 *
 * @param  {String} endpoint
 * @param  {Object} params
 * @param  {Object} params
 *
 * @return {Object}
 */

const del = (endpoint, params = {}) => {
	return fetch(apiUrl + endpoint + "?" + new URLSearchParams(params), {
		method: "DELETE",
		headers: headersData,
	}).then((res) => res.json());
};

/**
 * OPTIONS requests
 *
 * @param  {String} endpoint
 * @param  {Object} params
 *
 * @return {Object}
 */

const options = (endpoint, params = {}) => {
	return fetch(apiUrl + endpoint + "?" + new URLSearchParams(params), {
		method: "OPTIONS",
		headers: headersData,
	}).then((res) => res.json());
};

const api = { get, post, put, del, options };
export default api;
