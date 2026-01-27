export interface EducationItem {
    degree: string;
    school: string;
    year: string;
    description: string;
    image: string;
}

export interface CurrentlyItem {
    title: string;
    place: string;
    year: string;
    description: string;
    image: string;
    ongoing?: boolean;
}