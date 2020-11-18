import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Login = ({
  token, changeInput, loading, doAuthenticate,
}) => {
  const handleChange = (event) => {
    const { value } = event.target;
    changeInput(value);
  };
  return (
    <Segment>
      <Form onSubmit={doAuthenticate} loading={loading}>
        <Form.Field>
          <input value={token} onChange={handleChange} placeholder="Token github" />
        </Form.Field>
        <Button type="submit">Valider</Button>
      </Form>
    </Segment>
  );
};

Login.propTypes = {
  token: PropTypes.string.isRequired,
  changeInput: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  doAuthenticate: PropTypes.func.isRequired,
};

export default Login;
