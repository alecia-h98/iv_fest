import { useState, useEffect } from 'react';
import useStore from '../../zustand/store';
import { PasswordInput } from '../ui/password-input';
import { Card, Button, Field, Input, Stack, AbsoluteCenter } from '@chakra-ui/react';


function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const register = useStore((state) => state.register)
  const errorMessage = useStore((state) => state.authErrorMessage);
  const setAuthErrorMessage = useStore((state) => state.setAuthErrorMessage);

  useEffect(() => {
    // Clear the auth error message when the component unmounts:
    return () => {
      setAuthErrorMessage('');
    }
  }, [])

  const handleRegister = (event) => {
    event.preventDefault();

    register({
      username: username,
      password: password,
    })
  };

  return (
    <>
    <AbsoluteCenter>
    <Card.Root maxW="lg" variant={'elevated'} colorPalette={'orange'} >
      <Card.Header>
      <Card.Title size="md">Register Page</Card.Title>
      <Card.Description>
        Input an email and password to register.
      </Card.Description>
      </Card.Header>
      <form onSubmit={handleRegister}>
        <Card.Body>
        <Stack gap="4" align="flex-start" maxW="md">
          <Field.Root>
        <Field.Label htmlFor="username">Username:</Field.Label>
        <Input
          type="text"
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </Field.Root>
        <Field.Root>
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
          Register 
        </Button>
        </Card.Footer>
      </form>
      { // Conditionally render registration error:
        errorMessage && (
          <h3>{errorMessage}</h3>
        )
      }
    </Card.Root>
    </AbsoluteCenter>
    </>
  );
}


export default RegisterPage;
