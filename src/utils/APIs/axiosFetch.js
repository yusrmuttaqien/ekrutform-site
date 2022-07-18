import axios from 'axios';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';

/**
 * Wrapper for Axios
 * @param {String} url Define url tobe called
 * @param {'post' | 'get' | 'put' | 'delete' | 'update'} method Define url call method
 * @param {Any} param1 Define either payload or config based on method
 * @param {Any} param2 Define config when param1 is payload based on method
 * @returns Customized Axios instance
 */

export default function axiosFetch(url, method, param1, param2) {
  return new Promise((resolve, reject) => {
    axios[method](url, param1, param2)
      .then((res) => resolve(res.data))
      .catch((err) => {
        if (err.response) {
          const { data, status } = err.response;
          const { url } = err.config;

          if (url.includes('http://')) {
            reject(
              Error(
                'Please switch site permission for "Insecure content" to "Allowed"',
                { cause: 400 }
              )
            );
          } else {
            reject(
              Error(
                isString(data?.message)
                  ? data.message
                  : 'Server error is happened',
                {
                  cause: isNumber(data?.status) ? data.status : 500,
                }
              )
            );
          }
        } else {
          reject(Error('Client error is happened', { cause: 400 }));
        }
      });
  });
}
