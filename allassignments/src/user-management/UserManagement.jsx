import React, { useState, useEffect } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [error, setError] = useState(null);


  useEffect(()=>{
    console.log('useEffect 1 is running');
    document.title = selectedUser ? `${selectedUser.name}'s Posts` : 'User Management System';
  },[])
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoadingUsers(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingUsers(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!selectedUser) return;
      try {
        setLoadingPosts(true);
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${selectedUser.id}`
        );
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingPosts(false);
      }
    };
    fetchPosts();
  }, [selectedUser]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
        User Management System
      </h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="block mx-auto mb-4 p-2 border rounded w-80"
      />

      {loadingUsers ? (
        <p className="text-center">Loading users...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className={`p-4 border rounded shadow-md bg-white cursor-pointer hover:bg-indigo-50 ${
                selectedUser?.id === user.id ? "border-indigo-500" : ""
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <h2 className="font-bold text-lg">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          ))}
        </div>
      )}

      {selectedUser && (
        <div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">
            {selectedUser.name}'s Posts
          </h2>
          {loadingPosts ? (
            <p>Loading posts...</p>
          ) : (
            <ul className="list-disc pl-6">
              {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default UserManagement;
