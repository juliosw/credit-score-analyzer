// frontend/src/App.jsx
import React from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

export default function App() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">
        Análise de Crédito
      </h1>
      <UserForm />
      <UserList />
    </div>
  );
}
Improve
