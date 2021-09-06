import client from '@sanity/client';

export default client({
  projectId: 'hk5oblnd',
  dataset: 'production',
  useCdn: true,
});
