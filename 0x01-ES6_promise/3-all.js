/* eslint-disable no-console */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user]).then((res) => {
    console.log(`${res[0].body} ${res[1].firstname} ${res[1].lastname}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
