import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, collection , addDoc ,query ,getDocs ,orderBy,where} from 'firebase/firestore/lite';
import { createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAiWzsjZnrCoZCglGecUoho2-DXLOs8ALM",
  authDomain: "dreamy-jotter.firebaseapp.com",
  databaseURL: "https://dreamy-jotter-default-rtdb.firebaseio.com",
  projectId: "dreamy-jotter",
  storageBucket: "dreamy-jotter.appspot.com",
  messagingSenderId: "33778266706",
  appId: "1:33778266706:web:02367ad62446f920e7e58b",
  measurementId: "G-8CNXJMHLGH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getFirestore(app);


const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

const registerWithEmail = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};


// Crear una nueva nota
const createNote = async (date,  noteData , user) => {
  // Verificar los valores de date, user y noteData
  console.log('Fecha:', date);
  console.log('Usuario:', user);
  console.log('Datos de la nota:', noteData);

  // Verificar si alguno de los valores es undefined
  if (!date || !user || !noteData) {
    console.error('Alguno de los datos es undefined. Verifica los valores antes de llamar a addDoc.');
    return; // Detener la ejecución si hay datos indefinidos
  }

  // Crear la publicación con la información de la imagen y guardarla en la base de datos
  const newNote = {
    date,
    data: noteData,
    user,
  };

    // Añadir la nota a la colección 'notes' en la base de datos
    const docRef = await addDoc(collection(db, 'notes'), newNote);
    console.log('Nota agregada con ID:', docRef.id);

    // Devolver el ID del documento recién creado
    return docRef.id;
   
};
//------
const getNotesByDate = async (selectedDate) => {
  const startOfDay = new Date(selectedDate);
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date(selectedDate);
  endOfDay.setHours(23, 59, 59, 999);

  const q = query(
    collection(db, 'notes'),
    where('date', '>=', startOfDay),
    where('date', '<=', endOfDay),
    orderBy('date', 'desc')
  );

  const querySnapshot = await getDocs(q);
  const notes = [];

  querySnapshot.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });

  console.log('Notas obtenidas por fecha:', notes);
  return notes;
};




// Editar una nota existente
 const updateNote = async (noteId, updatedNoteData) => {
  try {
    await db.collection('notes').doc(noteId).update(updatedNoteData);
    console.log('Nota actualizada correctamente');
  } catch (error) {
    console.error('Error al actualizar la nota:', error);
    throw new Error('Error al actualizar la nota');
  }
};

// Eliminar una nota existente
 const deleteNote = async (noteId) => {
  try {
    await db.collection('notes').doc(noteId).delete();
    console.log('Nota eliminada correctamente');
  } catch (error) {
    console.error('Error al eliminar la nota:', error);
    throw new Error('Error al eliminar la nota');
  }
};


export { signInWithGoogle, registerWithEmail , auth , createNote , deleteNote , updateNote , getNotesByDate , };
