import axiosFetch from '@/utils/APIs/axiosFetch';

const BASE_URL = (endpoint) => 'http://hr.ekrut.co/' + endpoint;

export function POSTBasicProfile(payload, cb, cbError) {
  return axiosFetch(BASE_URL('items/users'), 'post', payload)
    .then((res) => cb && cb(res))
    .catch((err) => cbError(err.message));
}
