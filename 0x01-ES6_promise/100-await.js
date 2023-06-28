import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto('example.jpg'), createUser()]);
    
    return {
      photo: photo,
      user: user,
    };
  } catch (error) {
    console.log('An error occurred:', error);
    return {
      photo: null,
      user: null,
    };
  }
}
