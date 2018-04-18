/**
 * CDN
 */

const isPrerender = window.__PRERENDER_INJECTED__ === 'prerender'

__webpack_public_path__ = isPrerender ? '' : process.env.CDN_PATH
