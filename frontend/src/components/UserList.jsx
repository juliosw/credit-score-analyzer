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
