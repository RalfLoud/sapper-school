import { client } from './contentful';

export async function getAllNews() {
  const res = await client.getEntries({
    content_type: 'news',
    order: '-fields.date',
  });
  return res.items;
}

export async function getAllVideos() {
  const res = await client.getEntries({
    content_type: 'video',
  });
  return res.items;
}