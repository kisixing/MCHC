import labourDelivery from './deliver-management';
import highRiskChildren from './high-risk-children';
import maternalDeath from './maternal-death';
import neonatalDiseases from './neonatal-diseases';
import debilityChildren from './debility-children';
import postpartumVisit from './postpartum-visit';
import premaritalCare from './premarital-care';
import highriskManagement from './high-risk-management';
import prenatalVisit from './prenatal-visit';
import prenatalScreening from './prenatal-screening';
import prenatalDiagnosis from './prenatal-diagnosis';
import statistics from './statistics';
import gynecologicalDiseases from './gynecological-diseases';
import pmtct from './pmtct';
import birthDefect from './birth-defect';
import hearingScreening from './hearing-screening';
import childDeath from './child-death';
import childExamination from './child-examination';
import childManagement from './child-management';
import others from './others';

export default [
  //
  premaritalCare,
  gynecologicalDiseases,
  prenatalVisit,
  highriskManagement,
  prenatalScreening,
  prenatalDiagnosis,
  labourDelivery,
  postpartumVisit,
  pmtct,
  maternalDeath,
  birthDefect,
  hearingScreening,
  childDeath,
  highRiskChildren,
  // childExamination,
  childManagement,
  neonatalDiseases,
  debilityChildren,
  statistics,
  ...others,
];
