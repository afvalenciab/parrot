import { Container } from '@material-ui/core';
import LoginForm from 'components/LoginForm';

export default function Login() {
  return (
    <Container component="main" maxWidth="sm">
      <LoginForm />
    </Container>
  );
}
