import React, { useState } from 'react';
import Input from '../components/Input'
import Button from '../components/Button'

export default function InputPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const resetFields = () => {
        setEmail('');
        setPassword('');
    };
    return (
        <div>
        <Input label="Email" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}/>
        <Input label="Password" type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)}/>
        <Button success rounded>Submit</Button>
        <Button danger rounded onClick={resetFields}>Reset</Button>
        </div>
  )
}
