import { useState } from 'react';

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  return {
    values,
    setValues,
    touched,
    setTouched,
    errors,
    setErrors,
    handleChange,
    handleBlur,
  };
} 