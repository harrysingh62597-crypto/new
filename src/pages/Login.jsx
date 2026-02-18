import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple hardcoded password check
        if (password === 'Umbrella@3135') {
            localStorage.setItem('auth', 'true');
            navigate('/', { replace: true });
        } else {
            setError('Incorrect password. Access denied.');
            setPassword(''); // Clear pasUsword on error
        }
    };

    return (
        <div className="login-container">
            <div className="login-background-circle"></div>
            <div className="login-background-circle-2"></div>

            <div className="login-card">
                <h1 className="login-title">Welcome Back</h1>
                <form onSubmit={handleLogin} className="login-form">
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Enter Authorization Code"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setError('');
                            }}
                            autoFocus
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Access System
                    </button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
