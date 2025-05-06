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
