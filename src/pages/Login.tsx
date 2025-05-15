import { login } from '@/api/auth';
import { useAppDispatch } from '@/redux/hooks';
import { onAuthLogin } from '@/redux/slices/authSlice';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const location = useLocation();
  const from = location.state?.from;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mutateAsync, isError, error, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      dispatch(onAuthLogin({ accessToken: data.accessToken, user: data.user }));
      navigate(from || '/', { replace: true });
    },
  });

  const onSubmitHandler = (data: Inputs) => {
    mutateAsync(data);
  };
  return (
    <section>
      <h1>Login</h1>
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
            type='text'
            id='password'
            placeholder='Password'
            {...register('password')}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </fieldset>

        <button>Login</button>
        {isError && <p className='text-red-600'>Error: {error.message}</p>}
        {isPending && <p>Loading...</p>}
      </form>
    </section>
  );
};

export default Login;
