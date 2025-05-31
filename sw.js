// Service Worker: proxy-sw.js
const PROXY_URL = 'https://cdn-cf.snappi.cloud/proxy?key=2frh04i$fiNn3eyS&url=';

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const pathname = url.pathname;
  const proxiedUrl = PROXY_URL + encodeURIComponent(url.href);

  const requestInit = {
    method: event.request.method,
    headers: new Headers(event.request.headers),
    mode: 'cors',
    credentials: event.request.credentials,
    redirect: 'follow'
  };

  const proxyRequest = new Request(proxiedUrl, requestInit);

  event.respondWith(
    fetch(proxyRequest).then(response => {
      console.log('Proxied fetch successful:', url.href);
      return response;
    }).catch(error => {
      console.error('Proxy fetch failed:', error);
      return fetch(event.request);
    })
  );
});
