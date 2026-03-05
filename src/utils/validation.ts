import type { RegisterFormData, LoginFormData, RegisterErrors, LoginErrors } from '../types';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};

export const validateRegisterForm = (data: RegisterFormData): RegisterErrors => {
  const errors: RegisterErrors = {};

  // Validate Full Name
  if (!data.fullName.trim()) {
    errors.fullName = 'Full Name is required';
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = 'Full Name must be at least 2 characters';
  }

  // Validate Email
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate Password
  if (!data.password) {
    errors.password = 'Password is required';
  } else if (!validatePassword(data.password)) {
    errors.password = 'Password must be at least 8 characters';
  }

  // Validate Confirm Password
  if (!data.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};

export const validateLoginForm = (data: LoginFormData): LoginErrors => {
  const errors: LoginErrors = {};

  // Validate Email
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate Password
  if (!data.password) {
    errors.password = 'Password is required';
  }

  return errors;
};
