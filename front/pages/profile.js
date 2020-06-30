import React from 'react';
import AppLayout from '../components/AppLayout'
import NicknameEidtForm from '../components/NicknameEidtForm'
import FollowList from '../components/FollowList'
import Head from 'next/head';

const Profile = () => {
    const followerList = [{ nickname: '상범이' }, { nickname: '바보' }, { nickname: '노드버드오피셜' }]
    const followingList = [{ nickname: '상범이' }, { nickname: '바보' }, { nickname: '노드버드오피셜' }]

    return (
        <>
        <Head>
            <meta charSet="utf-8" />
            <title>내 프로필 | NodeBird</title>
        </Head>
        <AppLayout>
            <NicknameEidtForm/>
            <FollowList header="팔로잉 목록" data={followingList}/>
            <FollowList header="팔로워 목록" data={followerList}/>
        </AppLayout>
        </>
    );
};

export default Profile;