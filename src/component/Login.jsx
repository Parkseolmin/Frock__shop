import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateAction } from '../redux/actions/authenticateAction';

export default function Login({ setAuthenticate }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loginUser = (event) => {
    event.preventDefault();
    dispatch(authenticateAction.login(id, password));
    setAuthenticate(true); // 로그인 상태 업데이트
    navigate('/');
  };

  return (
    <div>
      <Container>
        <div className='loginContainer'>
          <div className='login__background'>
            <div className='login__input'>
              <Form onSubmit={(event) => loginUser(event)}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    onChange={(event) => setId(event.target.value)}
                  />
                  <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Password'
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                  <Form.Check type='checkbox' label='Check me out' />
                </Form.Group>
                <Button variant='secondary' type='submit'>
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
