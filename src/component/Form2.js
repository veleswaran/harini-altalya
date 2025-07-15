import { useState } from "react";

export default function Form2() {
    let [data, setdata] = useState({})

    function handleChange(e) {
        setdata({ ...data, [e.target.id]:e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log(data)
    }
    return (
        <>
            <div className="container mt-3">
                <h2>Inline Forms</h2>
                <p>If you want your form elements to appear side by side, use .row and .col:</p>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                     <div className="col">
                            <input type="text" class="form-control" id="email" placeholder="Enter email" onChange={handleChange} name="email" />
                        </div>
                        <div class="col">
                            <input type="password" class="form-control" id="pwd" placeholder="Enter password" onChange={handleChange} name="pswd" />
                        </div>
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
            </div></>
    )
}