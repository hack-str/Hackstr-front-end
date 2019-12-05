import axios from 'axios';
import { environment } from '../environment/environment';
export interface IListing {
    id:number;
    userId:number;
    address:string;
    rentPrice:number;
    isActive: boolean;
    description: string;
    pictureUrl: string;
}
export const getListings = async ()=>{
    const promise = await axios.get(environment.listingUrl);
    console.log(promise.data);
    return promise.data;
}
export const getByListingId = async (id:number)=>{
    const promise = await axios.get(environment.listingUrl+'/'+id);
    return promise.data;
}
export const getByUserId = async (id:number) =>{
    const promise = await axios.get(environment.listingUrl+'/user/'+id);
    return promise.data;
}
export const postListing = async (listing: IListing)=>{
    const promise = await axios.post(environment.listingUrl, listing);
    return promise.data;
}
export const updateListing = async (id:number, listing:IListing)=>{
    const promise = await axios.put(environment.listingUrl+'/'+id,listing);
    return promise.data;
}
export const deleteListing=async (id:number)=>{
    const promise = await axios.delete(environment.listingUrl+'/'+id);
    return promise.data;
}
export default IListing;