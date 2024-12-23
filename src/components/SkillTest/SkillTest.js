import React, { createContext, useState } from 'react'
import { ComparisonGraph } from '../ComparisonGraph/ComparisonGraph'
import { LeftTopBar } from '../LeftTopBar/LeftTopBar'
import { QuestionWise } from '../QuestionWise/QuestionWise'
import { QuickStatistics } from '../Quick Statistics/QuickStatistics'
import { SyllabusWise } from '../SyllabusWise/SyllabusWise'
import { Modal } from '../Modal/Modal';

import classes from './SkillTest.module.css';

//this is default 
export const statsContext = createContext({
  rank: 1,
  percentile: 100,
  answers: 15
});

export const SkillTest = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={classes.skillTest}>
      <div className={classes.pageTitle}>
        Skill Test
      </div>
      <div className={classes.pageComponents}>
        <div className={classes.skillTestLeft}>
            <LeftTopBar setShowModal={setShowModal} />
            <QuickStatistics showModal={showModal}/>
            <ComparisonGraph />
        </div>
        <div>
          <SyllabusWise />
          <QuestionWise />
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  )
}
