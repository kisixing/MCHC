import request from '@/utils/request';

export async function getPregnancy(id: number) {
  return request.get(`/pregnancies?id.equals=${id}`);
}
