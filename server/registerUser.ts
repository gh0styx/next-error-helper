import { auth, firestore } from '../server/firebase/firebaseConfig'; // Убедитесь, что путь к файлу firebaseConfig.ts правильный
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

interface UserData {
  email: string;
  name: string;
}

export const registerUser = async (
  email: string,
  password: string,
  name: string,
) => {
  try {
    // Создаем пользователя в Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    // Добавляем данные пользователя в Firestore
    await setDoc(doc(firestore, 'users', user.uid), {
      email: user.email,
      name: name,
      createdAt: new Date().toISOString(),
    });

    console.log('User registered and added to Firestore!');
    return true;
  } catch (error) {
    console.error('Error registering user and adding to Firestore:', error);
    return false;
  }
};
