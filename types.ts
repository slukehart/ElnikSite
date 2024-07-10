export interface GetProducts {
    status: number;
    message: Products[];
}

export type Products = {
    id: string
    name: string,
    description: string,
    shortDescription: string,
    img: string,
    brochure: string,
    brochureImage: string
}

export interface BlogPost {
    title: string;
    id: number;
    image: string;
    content: string;
    author: string;
    date: Date;
    excerpt: string;
    description: string;
}