import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';

const schema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(6)
      .max(100)
      .regex(/^(?=.*[a-z]).*$/)
      .regex(/^(?=.*[A-Z]).*$/)
      .regex(/^(?=.*[@$!%*?&]).*$/),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type Inputs = z.infer<typeof schema>;

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  useMutation({
    mutationFn: () => {},
  })

  const onSubmitHandler = (data: Inputs) => {
    console.log(data.email);
    console.log(data.password);
    console.log(data.confirmPassword);
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset>
          <label htmlFor='email'>Email:</label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type='email'
            id='email'
            placeholder='Email'
            {...register('email')}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </fieldset>

        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type='password'
            id='password'
            placeholder='Password'
            {...register('password')}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </fieldset>

        <fieldset>
          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            type='password'
            id='confirmPassword'
            placeholder='Confirm Password'
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </fieldset>

        <button type='submit'>Register</button>
      </form>
    </section>
  );
};

export default Register;
