import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.utils';

function useAuth() {
  
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged(user => {
      if (user) {
          setAuthUser(user);
      } else {
          setAuthUser(null);
      }
    });
    return () => unsubsribe()
  }, []);

  return authUser; 
}

export default useAuth;