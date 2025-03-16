// import { useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { toast } from 'react-toastify';
// import { auth } from '../../../firebase/auth'; // Adjust the import path as needed

// export const useCreateUser = () => {
//     const navigate = useNavigate();

//     const createUser = (form: HTMLFormElement) => {
//         const email = form.email.value;
//         const password = form.password.value;
//         createUserWithEmailAndPassword(auth, email, password)
//             .then(() => {
//                 toast.success("Sign-up successfully");
//                 form.reset();
//                 navigate("overview");
//             })
//             .catch(err => {
//                 console.log(err.message);
//             });
//     };

//     return createUser;
// };