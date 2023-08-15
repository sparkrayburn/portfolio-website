interface SanityBody{
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}


interface Image{
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference"
    };
    
}

export interface PageInfo extends SanityBody{
    _type: "pageInfo";
    name: string;
    address: string;
    backgroundInformation: string;
    email: string;
    role:string;
    phoneNumber: string;
    profilePic: Image;
    heroImage: Image;
}


export interface Experience extends SanityBody{
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere:boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}


export interface Technology extends SanityBody{
    _type: "skill";
    image: Image;
    progress: string;
    title: string;
}

export interface Skill extends SanityBody{
    _type: "skill";
    image: Image;
    progress: string;
    title: string;
}

export interface Social extends SanityBody{
    _type: "social";
    title: string;
    url: string;
}








