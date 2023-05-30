import { auth} from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const useFirebase = () => {
  const createUser = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return { createUser };
};

export default useFirebase;
