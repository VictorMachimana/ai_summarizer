import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
  params: {
    url: 'https://time.com/6266679/musk-ai-open-letter/',
    length: '3'
  },
  headers: {
    'X-RapidAPI-Key': '1321a8c4bcmsh5bdff34882097c5p1324d4jsn53d63efc3c6f',
    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
  }
};

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
	reducerPath: 'articleApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
		prepareHeaders: (headers) => {

			if (rapidApiKey) {
				headers.set('X-RapidAPI-Key', rapidApiKey);
				headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
				console.log("🚀  headers:", headers)
			}

			return headers;
		}
	}),
	endpoints: (builder) => ({
		getSummary: builder.query({
				query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
		})
	})
})

export const  { useLazyGetSummaryQuery } = articleApi;
