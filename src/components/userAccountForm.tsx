'use client'
import React, { useState } from 'react';
import styles from '@/styles/login.module.css';
import {auth} from '@/scripts/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from "next/navigation";

// login info
// testemail@email.com
// testpassword

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((user) => {
        console.log(user);
        router.push('/home/page');
    }).catch((err) => {
        console.log(err);
    })

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles['login-container']}> {/* Apply login-container class */}
      <h2 className={styles['login-title']}>Login
      </h2> {/* Apply login-title class */}
      <form className={styles['form-container']} onSubmit={handleSubmit}> {/* Apply form-container class */}
        <div className={styles['form-group']}> {/* Apply form-group class */}
          <label className={styles.label} htmlFor="email">Email:</label>
          <input 
            className={styles.inputstyle}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}> {
/* Apply form-group class */}
          <label className={styles.label} htmlFor="password">Password:</label>
          <input
          className={styles.inputstyle}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles['login-button']}> {/* Apply login-button class */}
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
