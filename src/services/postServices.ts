import { APIResponse, Post } from "types/Post";
import { PostListType } from "types/PostList";



export async function getPostBySlug(slug: string): Promise<Post | null> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
    );
    const { data }: APIResponse = await res.json();
    const { post } = data || {};
    return post
}

export async function getPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`, {
        cache: "force-cache"
    });
    const { data }: { data: { posts: PostListType[] } } = await res.json();
    const { posts } = data || {}
    return posts;
}
