import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import styles from './index.less';
import { SearchOutlined } from '@ant-design/icons';
import { omit, get } from 'lodash';
import PatientList from './PatientList';
import observePatientData from '@/utils/observePatientData';
import moment from 'moment';

export default (props: any) => {
  const [showPanel, setShowPanel] = useState(false);

  const handleVisible = () => {
    setShowPanel(!showPanel);
  };

  const handlePasteData = (data: any) => {
    observePatientData.triger({
      ...omit(data, [
        'id',
        'createDate',
        'modifyDate',
        'validateDate',
        'recordsrc',
        'recordstate',
        'note',
        'allergyHistory',
        'diseaseHistory',
        'familyHistory',
        'maritalHistory',
        'premaritalVisit',
        'procedureHistory',
        'husband',
      ]),
      dob: moment(get(data, 'dob')),
    });
  };

  const renderFooter = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <Button size="small" onClick={handleVisible} style={{ float: 'right', marginLeft: 8 }}>
          关闭
        </Button>
      </div>
    );
  };

  return (
    <div className={styles.fixedSearch}>
      {!showPanel && (
        <div className={styles.fixedSearchTriger} title="快速查询">
          <SearchOutlined onClick={handleVisible} className={styles.fixedSearchTrigerIcon} />
        </div>
      )}
      <Drawer
        title="用户资料查询"
        placement="right"
        mask={false}
        width={520}
        onClose={handleVisible}
        closable
        visible={showPanel}
        className={styles.fixedSearchPanel}
        // footer={renderFooter()}
      >
        <PatientList onExport={handlePasteData} />
      </Drawer>
    </div>
  );
};
