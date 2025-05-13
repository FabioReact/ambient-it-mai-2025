import { useRef } from 'react';

const Register = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current as HTMLInputElement;
    const password = passwordRef.current;
    const confirmPassword = confirmPasswordRef.current as HTMLInputElement;
    console.log(email.value);
    console.log(password!.value);
    console.log(confirmPassword.value);
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor='email'>Email:</label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type='email'
            id='email'
            placeholder='Email'
            ref={emailRef}
          />
        </fieldset>

        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type='password'
            id='password'
            placeholder='Password'
            ref={passwordRef}
          />
        </fieldset>

        <fieldset>
          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type='password'
            id='confirmPassword'
            placeholder='Confirm Password'
            ref={confirmPasswordRef}
          />
        </fieldset>

        <button type='submit'>Register</button>
      </form>
    </section>
  );
};

export default Register;
