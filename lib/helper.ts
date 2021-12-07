import axios from 'axios';

export type TailType = {
  id: number;
  title: string;
  description: string;
}

export interface TailPageProps extends TailType {
  notFound: boolean;
}

const getTails = async (): Promise<TailType[]> => {
  if (!!process.env.FILE_URL) {
    try {
      const { data } = await axios.get<TailType[]>(process.env.FILE_URL);

      return data;
    } catch (error) {
      console.error(error);

      return [];
    }
  }

  return require('../public/static/tails.json');
}

export const getPageProps = async (data: any) => {
  if (!data.long_tails.length) {
    return {
      props: { notFound: true }
    }
  }

  const jsonId = data.long_tails[0].json_id;
  const tails = await getTails();
  const pageData = tails.find(tail => tail.id === jsonId);

  return !!pageData ? { props: { ...pageData } } : { props: { notFound: true } };
}
