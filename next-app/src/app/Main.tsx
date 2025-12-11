'use client';

import { useState, useEffect } from 'react';

interface Person {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export default function Main() {
  const [persons, setPersons] = useState<Person[]>([]);
  const [name, setName] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch all persons
  const fetchPersons = async () => {
    try {
      const response = await fetch('/api/person');
      const data = await response.json();
      if (data.success) {
        setPersons(data.data);
      }
    } catch (error) {
      console.error('Error fetching persons:', error);
    }
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  // Create person
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/person', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();
      if (data.success) {
        setName('');
        setMessage('Person created successfully!');
        fetchPersons();
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('Failed to create person');
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };
  
  const handleUpdate = async (id: string) => {
    if (!editingName.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/person/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: editingName }),
      });

      const data = await response.json();
      if (data.success) {
        setEditingId(null);
        setEditingName('');
        setMessage('Person updated successfully!');
        fetchPersons();
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('Failed to update person');
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  // Delete person
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this person?')) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/person/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (data.success) {
        setMessage('Person deleted successfully!');
        fetchPersons();
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('Failed to delete person');
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  // Start editing
  const startEdit = (person: Person) => {
    setEditingId(person._id);
    setEditingName(person.name);
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditingName('');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        Person CRUD App
      </h1>

      {message && (
        <div
          style={{
            padding: '10px',
            marginBottom: '20px',
            backgroundColor: message.includes('Error') ? '#fee' : '#efe',
            border: `1px solid ${message.includes('Error') ? '#c00' : '#0c0'}`,
            borderRadius: '4px',
          }}
        >
          {message}
        </div>
      )}

      {/* Create Form */}
      <form onSubmit={handleCreate} style={{ marginBottom: '30px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            style={{
              flex: 1,
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Adding...' : 'Add Person'}
          </button>
        </div>
      </form>

      {/* Persons List */}
      <div>
        <h2 style={{ marginBottom: '15px' }}>All Persons</h2>
        {persons.length === 0 ? (
          <p style={{ color: '#666' }}>No persons found. Add one above!</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {persons.map((person) => (
              <li
                key={person._id}
                style={{
                  padding: '15px',
                  marginBottom: '10px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {editingId === person._id ? (
                  <>
                    <input
                      type="text"
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        marginRight: '10px',
                      }}
                    />
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <button
                        onClick={() => handleUpdate(person._id)}
                        disabled={loading}
                        style={{
                          padding: '8px 15px',
                          backgroundColor: '#0070f3',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: loading ? 'not-allowed' : 'pointer',
                        }}
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        style={{
                          padding: '8px 15px',
                          backgroundColor: '#666',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <span style={{ fontSize: '18px' }}>{person.name}</span>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <button
                        onClick={() => startEdit(person)}
                        style={{
                          padding: '8px 15px',
                          backgroundColor: '#f90',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(person._id)}
                        disabled={loading}
                        style={{
                          padding: '8px 15px',
                          backgroundColor: '#d00',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: loading ? 'not-allowed' : 'pointer',
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}