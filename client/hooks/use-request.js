import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      // const _errors = err.response.data.errors;
      setErrors(
        <div className="alert alert-danger">
          <h4>Oops</h4>
          <ul className="my-0">
            {errors.map((_err) => {
              return <li key="_err.message">{_err.message}</li>;
            })}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};
