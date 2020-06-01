import React from 'react';
import styles from './index.less';

function NoDataTip() {
    return (
        <div className={styles.container}>
            <span>暂无数据</span>
        </div>
    )
}

export default NoDataTip;