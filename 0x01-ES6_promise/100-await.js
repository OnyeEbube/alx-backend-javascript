import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto('example.jpg');
    const userPromise = createUser();

    const [photo, user] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: {
        status: photo.status,
        body: photo.body,
      },
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };
  } catch (error) {
    console.log('An error occurred:', error);
    return {
      photo: null,
      user: null,
    };
  }
}
