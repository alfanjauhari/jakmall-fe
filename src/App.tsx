import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StepsLayout } from './components';
import useLocalStorage from './hooks/useLocalStorage';
import { Delivery, Finish, NotFound, Payment } from './pages';
import { initialValues, StoreSchema } from './utils';

export default function App() {
  const [formData, setFormData] = useLocalStorage('form-data', initialValues);

  const { handleSubmit, watch, ...formProps } = useForm({
    mode: 'all',
    defaultValues: formData,
  });

  useEffect(() => {
    const subscribe = watch((value) => setFormData(value as StoreSchema));

    return () => subscribe.unsubscribe();
  }, [watch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <StepsLayout
              handleSubmit={handleSubmit}
              watch={watch}
              {...formProps}
            />
          }
        >
          <Route path="/" element={<Delivery watch={watch} {...formProps} />} />
          <Route
            path="/payment"
            element={<Payment watch={watch} {...formProps} />}
          />
          <Route
            path="/finish"
            element={<Finish watch={watch} {...formProps} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
