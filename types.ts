export interface GetProducts {
  status: number;
  message: Products[];
}

export interface GetBrochures {
  status: number;
  message: Brochure[];
}

export type Products = {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  img: string;
  brochure: string;
  brochureImage: string;
  type: string;
};

export type Brochure = {
  name: string;
  group: string;
  text: string;
  brochure: string;
};

export type LinkedInPost = {
  id: string;
  postUrl: string;
  title: string;
  author: string;
  date: Date;
  subject: string;
  tag: string;
  imageLink: string;
};

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

export type LinkedInPostResults = {
  status: number;
  message: LinkedInPost[];
  next_set?: DocumentData;
  failure?: string;
};

export type UpdatePostData = {
  id: string;
  title: string;
  author: string;
  subject: string;
  tag: string;
  image: Blob;
  imageLink: string;
  fileUpload: Blob;
};

export type ProductTableInfo = {
  alloyProccessing: string[];
  atmospheres: string;
  maxTempature: number;
  processVolumes: string;
  technicalInnovation: string[];
};
