import axiosFetch from '@/utils/APIs/axiosFetch';

// Unable to deploy live because http caused Mixed content error.
const BASE_URL = (endpoint) => 'http://hr.ekrut.co/' + endpoint;

export function POSTBasicProfile(payload, cb, cbError) {
  return axiosFetch(BASE_URL('items/users'), 'post', payload)
    .then((res) => cb && cb(res.data))
    .catch((err) => cbError && cbError(err.message));
}

export async function POSTDetails(payload, cb, cbError) {
  try {
    // Submitting start_date & end_date causing server error.
    await axiosFetch(BASE_URL('items/education'), 'post', payload.educations);
    await axiosFetch(BASE_URL('items/experience'), 'post', payload.experiences);

    cb && cb();
  } catch (err) {
    cbError && cbError(err.message);
  }
}
