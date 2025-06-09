export interface Post {
    title: string;
    briefText: string;
    text: string;
    coverImageUrl: string;
    related?: Post[];
}

export interface APIResponse {
    data: {
        post: Post | null;
    };
}
export interface CreatePostPayload {
    title: string;
    briefText: string;
    text: string;
    slug: string;
    readingTime: number;
    category: string;
    coverImage: File | null;
}
