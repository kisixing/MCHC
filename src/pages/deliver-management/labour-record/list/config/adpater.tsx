import { get, map } from 'lodash';

export const processFromApi = (data: any[]) => {
  return map(data, (item: object) => {
    return {
      ...item,
      name: get(item, 'admission.name'),
      areaNO: get(item, 'admission.areaNO'),
      idNO: get(item, 'admission.idNO'),
      firststage: `${Number(get(item, 'firststageh'))} 时 ${get(item, 'firststagem')}分`,
      secondstage: `${Number(get(item, 'secondstageh'))} 时 ${get(item, 'secondstagem')}分`,
      thirdstage: `${Number(get(item, 'thirdstageh'))} 时 ${get(item, 'thirdstagem')}分`,
    };
  });
};
