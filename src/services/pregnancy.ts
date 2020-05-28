import request from '@/utils/request';

export async function getPregnancy(id: number) {
  return request.get(`/pregnancies?id.equals=${id}`);
}

export async function getVisits(id: number) {
  return request.get(`/prenatal-visits?visitType.equals=1&pregnancyId.equals=${id}`);
}

export async function getDiagnoses(id: number) {
  return request.get(`/diagnoses?pregnancyId.equals=${id}`);
}
