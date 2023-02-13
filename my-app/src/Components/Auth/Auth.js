import React, { useContext, useState } from 'react';
import { Form, useParams } from 'react-router-dom';
import { authUser } from '../../Services/auth';

export default function Auth() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { type } = useParams();
  // const { user, setUser } = useContext(UserContext);

  const submitAuth = async (e) => {
    e.preventDefault();

    // try {
    //   const newUser = await authUser(email, password, type);
    //   setUser(newUser);
    // } catch (e) {
    //   console.error(e);
    // }
  };

  return (
    <div>
      <form onSubmit={submitAuth}>
        <label>Email</label>
        <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button>
          Submit
        </button>
      </form>

    </div>
  );
}
