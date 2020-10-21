import axios from 'axios'
import { K_HEADLINES_API } from '../../constants/apis';
import { IHeadLineAPIParams, IHeadLine, IHeadLineAPIResPayload, IHeadlineFavReqPayload } from '../../interfaces/headline';

export const FetchHeadlines = async ({ category, country }: IHeadLineAPIParams, token?:string): Promise<IHeadLine[]> => {
    try {
        let options: {[key: string]: any} = { 
            params: { category, country },
        }
    
        if(token){
            options['headers'] = {
                Authorization: `Bearer ${token}`
            }
        }
        const res = (await axios.get<IHeadLineAPIResPayload>(K_HEADLINES_API.FETCH(), options)).data.results.articles
        return res
    } catch (e) {
        throw e.response.data;
    }
}

export const AddHeadlinesToFav = async (headline: IHeadLine, token:string): Promise<boolean> => {
    try {
        const payload: IHeadlineFavReqPayload = {
            url: headline.url!,
            publishedAt: headline.publishedAt!
        }

        await axios.post(K_HEADLINES_API.FAV(), payload, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return true;
    }catch(e){
        throw e.response.data;
    }
}

export const RemoveHeadlinesRfomFav = async (headline: IHeadLine, token:string): Promise<boolean> => {
    try {
        const payload: IHeadlineFavReqPayload = {
            url: headline.url!,
            publishedAt: headline.publishedAt!
        }

        await axios.post(K_HEADLINES_API.FAV_DELETE(), payload, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return true;
    }catch(e){
        throw e.response.data;
    }
}