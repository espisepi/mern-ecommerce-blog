import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout, update } from '../actions/userActions';
import { listMyOrders } from '../actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';

function ProfileScreen(props) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const handleLogout = () => {
        dispatch(logout());
        props.history.push('/signin');
    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(update({ userId: userInfo._id, email, name, password }));
    }
    const userUpdate = useSelector(state => state.userUpdate);
    const { loading, success, error } = userUpdate;

    return (
    <div className="profile">
        <h1>Hola profile</h1>
    </div>
    );
}

export default ProfileScreen;