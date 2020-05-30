// 生成树形结构
export const generateTreeData = (
  data: Array<any>,
  firstLayer: {
    key: string,
    render: Function
  },
  secondLayer: {
    key: string,
    render: Function
  }): Array<any> => {
  if (data.length === 0 || !firstLayer || !secondLayer) return [];
  const treeData: Array<any> = [];
  const firstLayerArr: Array<any> = [];
  for (let i = 0; i < data.length; i++) {
    const firstArgument: any = data[i][firstLayer.key];
    const index = firstLayerArr.findIndex(v => v === firstArgument);
    if( index === -1){
      treeData.push({
        title: firstLayer.render(data[i][firstLayer.key], data[i]),
        key: data[i][firstLayer.key],
        children: []
      })
      firstLayerArr.push(firstArgument);
      for (let j = i; j < data.length; j++) {
        if (firstArgument === data[j][firstLayer.key]) {
          treeData[treeData.length - 1].children.push({
            title: secondLayer.render(data[j][secondLayer.key], data[j]),
            key: data[j][secondLayer.key],
          });
        }
      }
    }
  }
  return treeData;
}

export const openSpin = {type: "prenatalDiagnosis/setIsRequesting", payload: true};

export const closeSpin = {type: "prenatalDiagnosis/setIsRequesting", payload: false};