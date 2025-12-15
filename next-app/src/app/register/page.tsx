'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { userSchema, UserSchema } from '@/schemas/user.schema';
import { zodValidator } from '@/lib/zodValidator';

interface FormData {
  name: string;
  email: string;
  password: string;
  age: string;
}

interface FormErrors {
  [key: string]: string;
}

interface BackendError {
  field: string;
  message: string;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    age: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [backendErrors, setBackendErrors] = useState<BackendError[]>([]);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    // Convert age to number for validation
    const dataToValidate = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      age: formData.age === '' ? NaN : Number(formData.age)
    };

    const result = zodValidator(userSchema, dataToValidate);
    
    if (!result.success) {
      const errorObj: FormErrors = {};

      console.log('Frontend Validation Errors:', result);
      result?.errors?.forEach(err => {
        errorObj[err.field] = err.message;
      });
      setErrors(errorObj);
      return false;
    }
    
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBackendErrors([]);
    setSuccessMessage('');
    
    // Frontend validation - prevent API call if validation fails
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send POST request to /api/users
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          age: Number(formData.age)
        })
      });
      
      const data = await response.json();
      
      // Handle backend validation errors
      if (response.status === 400) {
        setBackendErrors(data.errors);
      } else if (response.ok) {
        setSuccessMessage('Registration successful!');
        setFormData({ name: '', email: '', password: '', age: '' });
        console.log('API Response:', data);
      }
    } catch (error) {
      setBackendErrors([{ 
        field: 'general', 
        message: 'Failed to submit form. Please try again.' 
      }]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>User Registration</h1>
        
        {successMessage && (
          <div style={styles.successMessage}>
            ✓ {successMessage}
          </div>
        )}
        
        {backendErrors.length > 0 && (
          <div style={styles.errorBox}>
            <strong>Backend Validation Errors:</strong>
            <ul style={styles.errorList}>
              {backendErrors.map((err, idx) => (
                <li key={idx}>{err.field}: {err.message}</li>
              ))}
            </ul>
          </div>
        )}
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={errors.name ? styles.inputError : styles.input}
              placeholder="Enter your name (min 3 characters)"
            />
            {errors.name && (
              <span style={styles.errorText}>{errors.name}</span>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={errors.email ? styles.inputError : styles.input}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span style={styles.errorText}>{errors.email}</span>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={errors.password ? styles.inputError : styles.input}
              placeholder="Enter your password (min 6 characters)"
            />
            {errors.password && (
              <span style={styles.errorText}>{errors.password}</span>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Age *</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              style={errors.age ? styles.inputError : styles.input}
              placeholder="Enter your age (min 18)"
            />
            {errors.age && (
              <span style={styles.errorText}>{errors.age}</span>
            )}
          </div>

          <button 
            type="submit" 
            style={isSubmitting ? styles.buttonDisabled : styles.button}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Register'}
          </button>
        </form>

        <div style={styles.testSection}>
          <h3 style={styles.testTitle}>Postman Testing Guide</h3>
          
          <div style={styles.testCase}>
            <h4 style={styles.testCaseTitle}>Test Case 1: Invalid Request</h4>
            <p><strong>Endpoint:</strong> POST http://localhost:3000/api/users</p>
            <p><strong>Body (JSON):</strong></p>
            <pre style={styles.code}>{`{
  "name": "Jo",
  "email": "invalid-email",
  "password": "123",
  "age": 15
}`}</pre>
            <p><strong>Expected Response (400):</strong></p>
            <pre style={styles.code}>{`{
  "success": false,
  "errors": [
    {
      "field": "name",
      "message": "Name must be at least 3 characters"
    },
    {
      "field": "email",
      "message": "Invalid email address"
    },
    {
      "field": "password",
      "message": "Password must be at least 6 characters"
    },
    {
      "field": "age",
      "message": "Age must be at least 18"
    }
  ]
}`}</pre>
            <p><strong>Why it fails:</strong> All fields violate validation rules.</p>
          </div>

          <div style={styles.testCase}>
            <h4 style={styles.testCaseTitle}>Test Case 2: Valid Request</h4>
            <p><strong>Endpoint:</strong> POST http://localhost:3000/api/users</p>
            <p><strong>Body (JSON):</strong></p>
            <pre style={styles.code}>{`{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepass123",
  "age": 25
}`}</pre>
            <p><strong>Expected Response (200):</strong></p>
            <pre style={styles.code}>{`{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepass123",
    "age": 25
  }
}`}</pre>
            <p><strong>Why it passes:</strong> All fields meet validation requirements.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  card: {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333'
  },
  successMessage: {
    padding: '12px',
    backgroundColor: '#d4edda',
    color: '#155724',
    borderRadius: '4px',
    marginBottom: '20px',
    border: '1px solid #c3e6cb'
  },
  errorBox: {
    padding: '12px',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    borderRadius: '4px',
    marginBottom: '20px',
    border: '1px solid #f5c6cb'
  },
  errorList: {
    marginTop: '8px',
    marginBottom: '0',
    paddingLeft: '20px'
  },
  form: {
    marginBottom: '30px'
  },
  formGroup: {
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: '600',
    color: '#333',
    fontSize: '14px'
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s'
  },
  inputError: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '2px solid #dc3545',
    borderRadius: '4px',
    boxSizing: 'border-box',
    backgroundColor: '#fff5f5'
  },
  errorText: {
    display: 'block',
    color: '#dc3545',
    fontSize: '12px',
    marginTop: '4px'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  buttonDisabled: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'not-allowed',
    opacity: 0.6
  },
  testSection: {
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '2px solid #eee'
  },
  testTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333'
  },
  testCase: {
    marginBottom: '30px',
    padding: '15px',
    backgroundColor: '#f8f9fa',
    borderRadius: '4px'
  },
  testCaseTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#495057'
  },
  code: {
    backgroundColor: '#2d2d2d',
    color: '#f8f8f2',
    padding: '12px',
    borderRadius: '4px',
    fontSize: '12px',
    overflowX: 'auto',
    marginTop: '8px',
    marginBottom: '8px'
  }
};