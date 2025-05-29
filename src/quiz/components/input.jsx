import React, { useState } from 'react';
import { Card } from './ui/Card';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input1 = styled.input`
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid ${(props) => (props.error ? '#f87171' : '#DADCE0')};
  border-radius: 4px;
  background: #0d1018;
  color: #f8f9fa;
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: ${(props) => (props.error ? '#f87171' : '#4285F4')};
    box-shadow: 0 0 0 3px ${(props) => (props.error ? '#f8717133' : '#4285F433')};
  }

  &::placeholder {
    color: #5b5d5f;
    opacity: 0.7;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #f8f9fa;
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: #f87171;
  margin-top: 4px;
`;

export default function Info({ setShowQuiz }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ name: false, email: false });

  const validateFields = () => {
    const newErrors = {
      name: !name.trim(),
      email: !email.trim(),
    };
    setErrors(newErrors);

    // Return true if no errors exist
    return !newErrors.name && !newErrors.email;
  };

  const handleClick = () => {
    if (validateFields()) {
      setShowQuiz(true);
    }
  };

  return (
    <Card className="w-1/2 p-6 border border-primary/20 shadow-xl backdrop-blur-sm bg-card/80 flex flex-col gap-6">
      <h1>Enter Your Details</h1>
      <FormGroup>
        <Label>Name</Label>
        <Input1
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />
        {errors.name && <ErrorMessage>Name is required.</ErrorMessage>}
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input1
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        {errors.email && <ErrorMessage>Email is required.</ErrorMessage>}
      </FormGroup>
      <motion.button
        className="bg-blue-600 w-fit p-2 pr-4 pl-4 rounded-md flex text-white"
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Next
      </motion.button>
    </Card>
  );
}
