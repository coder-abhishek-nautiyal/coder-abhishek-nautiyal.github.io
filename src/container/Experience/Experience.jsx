import React from 'react'
import './Experience.scss';
import { AppWrap } from '../../wrapper';

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ExperienceCard } from '../../container';
import { experiences } from '../../constants/data';


const Experience = () => {
    return (
        <>
            <div className="app__experience-container">
                <div className="app__experience-wrapper">
                    <div className="app__experience-title">
                        Experience
                    </div>
                    <div className="app__experience-desc">
                        My work experience working for different companies and projects.
                    </div>
                    <div className="app__experience-timelineSection">
                        <Timeline sx={{
                            [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                            },
                        }}>
                            {experiences.map((experience, index) => (
                                <TimelineItem key={index}>
                                    <TimelineSeparator>
                                        <TimelineDot variant="outlined" />
                                        {index !== experiences.length && <TimelineConnector style={{ background: '#6b7688' }} />}
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <ExperienceCard experience={experience} key={experience.id} />
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AppWrap(
    Experience,
    'experience',
    'app__primarybg'
);