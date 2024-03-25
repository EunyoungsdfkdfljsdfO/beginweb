import React from 'react';

export default function Profile() {
    return (
        <div className='profile'>
           <img className='photo' 
                src='https://images.unsplash.com/photo-1603575448878-868a20723f5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='avatar'
            />
            <h1>James Kim</h1>
            <p>프론트엔드 개발자</p>
        </div>
    );
}

