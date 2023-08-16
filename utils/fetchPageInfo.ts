import {PageInfo} from "../typings"
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";


const query = groq`
    *[_type == "pageInfo"][0]
    `;

export const fetchPageInfo = async() =>{
    const res = await sanityClient.fetch(query)


    // const data = await res.json()
    const pageInfo: PageInfo  = res


    return pageInfo;
}




