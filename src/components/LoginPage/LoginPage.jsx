import { useState, useEffect } from 'react';
import useStore from '../../zustand/store';
import { PasswordInput } from '../ui/password-input';
import { Card, Button, Field, Input, Stack } from '@chakra-ui/react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const logIn = useStore((state) => state.logIn)
  const errorMessage = useStore((state) => state.authErrorMessage);
  const setAuthErrorMessage = useStore((state) => state.setAuthErrorMessage);

  useEffect(() => {
    // Clear the auth error message when the component unmounts:
    return () => {
      setAuthErrorMessage('');
    }
  }, [])

  const handleLogIn = (event) => {
    event.preventDefault();

    logIn({
      username: username,
      password: password,
    })
  };

  return (
    <>
      <Card.Root maxW="md" >
      <Card.Header>
        <Card.Title >Login</Card.Title>
        <Card.Description>
          Please enter your email and password to log in.
        </Card.Description>
      </Card.Header>
      <form onSubmit={handleLogIn}>
         <Card.Body>
        <Stack gap="4" align="flex-start" maxW="sm">
          <Field.Root>
        <Field.Label htmlFor="username">Email:</Field.Label>
        <Input
          type="text"
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Field.Label htmlFor="password">Password:</Field.Label>
        <PasswordInput
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          </Field.Root>
        </Stack>
        </Card.Body>
        <Card.Footer justifyContent={"flex-end"}>
        <Button type="submit">
          Log In
        </Button>
     </Card.Footer>

      </form>
      
      { // Conditionally render login error:
        errorMessage && (
          <h3>{errorMessage}</h3>
        )
      }
      </Card.Root>
    </>
  );
}


export default LoginPage;
