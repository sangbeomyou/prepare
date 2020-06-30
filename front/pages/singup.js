import React from 'react';
import AppLayout from '../components/AppLayout'
import Head from 'next/head';

const Singup = () => {
    return (
        <>
        <Head>
            <meta charSet="utf-8" />
            <title>회원가입 페이지 | NodeBird</title>
        </Head>
        <AppLayout>
            회원가입 페이지
        </AppLayout>
        </>
    );
};

export default Singup;