import { Photo } from './photo';

export interface Location {
    id: number;
    name: string;
    shortDescription: string;
    longDescription: string;
    lat: number;
    lng: number;
    dateCreated: Date;
    categoryId: number;
    categoryName: string;
    photos?: Photo[];
}