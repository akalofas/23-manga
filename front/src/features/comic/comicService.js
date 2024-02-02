import { comics } from '../../data/dummyData';

const ComicService = {
  getComics: async () => {
    try {
      // Simulating a delay to mimic an API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Directly return the comics data
      return comics;
    } catch (error) {
      console.error('Error fetching comics:', error);
      throw new Error('Failed to fetch comics');
    }
  }
};

export default ComicService;
