import { useState } from "react";

export default function Form1() {
    let [data, setData] = useState({});

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault(); 
        console.log(data);
    }

    return (
        <>
            <div className="container mt-3">
                <h2>Stacked form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            onChange={handleChange}
                            name="email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            onChange={handleChange}
                            name="pswd"
                        />
                    </div>
                    <div className="form-check mb-3">
                        <label className="form-check-label">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="remember"
                            />{" "}
                            Remember me
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
