import React, { useState } from 'react';

const CreateUserForm = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
        profilePicture: null,
        firstname: '',
        lastname: '',
        email: '',
        dob: '',
        gender: '',
        address: '',
        pincode: '',
        mobileNumber: '',
    });

    const handleChange = (e) => {
        if (e.target.name === 'profilePicture') {
            setUser({ ...user, profilePicture: e.target.files[0] });
        } else {
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a new user object from the form data
        const newUser = {
            profilePicture: user.profilePicture,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            dob: user.dob,
            gender: user.gender,
            address: user.address,
            pincode: user.pincode,
            mobileNumber: user.mobileNumber,
        };

        // Create a copy of the existing users array and add the new user to it
        const updatedUsers = [...users, newUser];

        // Perform any additional actions with the updated users array, like sending it to a server or storing it in a state management system
        console.log(updatedUsers);
        // Reset the form
        setUser({
            profilePicture: null,
            firstname: '',
            lastname: '',
            email: '',
            dob: '',
            gender: '',
            address: '',
            pincode: '',
            mobileNumber: '',
        });
    };

    const handleReset = () => {
        setUser({
            profilePicture: null,
            firstname: '',
            lastname: '',
            email: '',
            dob: '',
            gender: '',
            address: '',
            pincode: '',
            mobileNumber: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Profile Picture:
                <input
                    type="file"
                    name="profilePicture"
                    onChange={handleChange}
                />
                {user.profilePicture && (
                    <img
                        src={URL.createObjectURL(user.profilePicture)}
                        alt="Profile Preview"
                        style={{ width: '100px', height: '100px' }}
                    />
                )}
            </label>
            <br />
            <label>
                Firstname:
                <input
                    type="text"
                    name="firstname"
                    value={user.firstname}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Lastname:
                <input
                    type="text"
                    name="lastname"
                    value={user.lastname}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Date of Birth:
                <input
                    type="date"
                    name="dob"
                    value={user.dob}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Gender:
                <select name="gender" value={user.gender} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <br />
            <label>
                Address:
                <textarea
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                ></textarea>
            </label>
            <br />
            <label>
                Pincode:
                <input
                    type="text"
                    name="pincode"
                    value={user.pincode}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Mobile Number:
                <input
                    type="tel"
                    name="mobileNumber"
                    value={user.mobileNumber}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Create User</button>
            <button type="button" onClick={handleReset}>
                Reset
            </button>
        </form>
    );
};

export default CreateUserForm;
