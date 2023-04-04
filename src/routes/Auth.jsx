import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div>
      <h1>회원가입</h1>
      <div>
        E-mail:
        <input
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Password:
        <input
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSignUp}>
          회원가입
        </button>
        <button>로그인</button>
      </div>
    </div>
  );
}

export default Auth;
