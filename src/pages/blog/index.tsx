import * as React from 'react';
import { getSortedPostsData } from '../../components/Posts';
import Layout from '../layout';
import BlogDirectory from '../../components/BlogDirectory';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: { allPostsData },
    };
}
export default function Index({allPostsData}) {
    return (
        <BlogDirectory allPostsData={allPostsData} />
    )
};

Index.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};