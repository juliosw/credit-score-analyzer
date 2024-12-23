import React, { useState } from 'react';

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

// frontend/src/components/UserList.jsx
import React, { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:8000/users/');
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Lista de Usuários</h2>
      <div className="grid gap-4">
        {users.map(user => (
          <div key={user.id} className="border p-4 rounded">
            <h3 className="font-bold">{user.name}</h3>
            <p>{user.email}</p>
            <p>Score: {user.score.toFixed(2)}</p>
            <p>Status: {user.credit_approved ? 'Aprovado' : 'Não aprovado'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

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