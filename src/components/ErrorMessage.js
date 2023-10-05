import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

function ErrorMessage({ message }) {
  return (
    <div className="error-card">
      <FontAwesomeIcon icon={faExclamationTriangle} className="error-icon" />
      <p className="error-message">{message}</p>
    </div>
  );
}

export default ErrorMessage;
