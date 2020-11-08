import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

const Login = () => (
  <Segment>
    <Form>
      <Form.Field>
        <input
          placeholder="Token github"
        />
      </Form.Field>
      <Button type="submit">Valider</Button>
    </Form>
  </Segment>
);

export default Login;
