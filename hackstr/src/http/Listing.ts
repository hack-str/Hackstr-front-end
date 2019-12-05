import axios from 'axios';
import { environment } from '../environment/environment';
interface IListing {
    id:number;
    userId:number;
    address:string;
    rentPrice:number;
    isActive: boolean;
    description: string;
    pictureUrl: string;
}
export const getListings = async ()=>{
    return await axios.get(environment.listingUrl);
}
export const getByListingId = async (id:number)=>{
    return await axios.get(environment.listingUrl+'/'+id);
}
export const getByUserId = async (id:number) =>{
    return await axios.get(environment.listingUrl+'/user/'+id);
}
export const postListing = async (listing: IListing)=>{
    return await axios.post(environment.listingUrl, listing);
}
