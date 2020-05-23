<!--
 * @Author: ZhongJun
 * @Date: 2020-05-21 11:07:35
 * @Descriptions: 
--> 
### Bar

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 图表标题 | ReactNode\|string | - |
| color | 图表颜色 | string | `rgba(24, 144, 255, 0.85)` |
| padding | 图表内部间距 | [array](https://github.com/alibaba/BizCharts/blob/master/doc/api/chart.md#7padding-object--number--array-) | `'auto'` |
| height | 图表高度 | number | - |
| data | 数据 | array<{x, y}> | - |
| autoLabel | 在宽度不足时，自动隐藏 x 轴的 label | boolean | `true` |


### Pie

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| animate | 是否显示动画 | boolean | true |
| color | 图表颜色 | string | `rgba(24, 144, 255, 0.85)` |
| height | 图表高度 | number | - |
| hasLegend | 是否显示 legend | boolean | `false` |
| padding | 图表内部间距 | [array](https://github.com/alibaba/BizCharts/blob/master/doc/api/chart.md#7padding-object--number--array-) | `'auto'` |
| percent | 占比 | number | - |
| tooltip | 是否显示 tooltip | boolean | true |
| valueFormat | 显示值的格式化函数 | function | - |
| title | 图表标题 | ReactNode\|string | - |
| subTitle | 图表子标题 | ReactNode\|string | - |
| total | 图标中央的总数 | string | function | - |

### 参考

[BizCharts](https://bizcharts.net/product/bizcharts/gallery)
