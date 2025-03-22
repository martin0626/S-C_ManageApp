import { FormEvent } from "react";

export default function RegisterForm(){
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Work');
    };
    
    return (
            <div className="register-container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Email:</label>
                        <input
                            type="email"
                            id="username"
                            placeholder="Enter username"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="email"
                            id="username"
                            placeholder="Enter username"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Confirm Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
    )
}