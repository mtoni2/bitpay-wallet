
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logged in with', email, password);
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Login to BitPay</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    required 
                    style={{ marginBottom: '10px', padding: '10px', width: '80%' }} 
                />
                <br/>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    required 
                    style={{ marginBottom: '10px', padding: '10px', width: '80%' }} 
                />
                <br/>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff' }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
