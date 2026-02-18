import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGraduationCap } from 'react-icons/fa';
import { IoLogoTableau } from 'react-icons/io5';
import { MdDoNotDisturbOnTotalSilence, MdWork } from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { experienceContent, type ExperienceType } from '../../content/Experience';

import 'react-vertical-timeline-component/style.min.css';
import '../../assets/css/experience.css';
import '../../assets/css/font.css';

export const ExperienceTimeline = (): React.JSX.Element => (
  <VerticalTimeline className="temp" lineColor="var(--bs-white)">
    {experienceContent.map((experience) => (
      <VerticalTimelineElement
        key={experience.title}
        contentStyle={contentStyles[experience.type]}
        contentArrowStyle={contentArrowStyles[experience.type]}
        date={`${experience.startYear} - ${experience.endYear}`}
        iconStyle={iconStyles[experience.type]}
        icon={typeIcons[experience.type]}
      >
        <h3 className="mb-0 subtitle">
          <b>{experience.title}</b>
        </h3>
        <h5 className="mt-1 subtitle">{experience.company}</h5>
        {experience.description !== '' && (
          <h6 className="mt-4 paragraph" style={{ whiteSpace: 'pre-line' }}>
            {experience.description}
          </h6>
        )}
        {experience.button?.map((btn) => (
          <Button
            key={btn.btnText}
            className="float-end"
            onClick={() => {
              window.open(btn.btnLink, '_blank', 'noopener,noreferrer');
            }}
            size="sm"
            variant={buttonVariants[experience.type]}
          >
            {btn.btnText}
          </Button>
        ))}
      </VerticalTimelineElement>
    ))}
    <VerticalTimelineElement
      iconStyle={{ background: 'var(--bs-indigo)', color: '#fff' }}
      icon={<MdDoNotDisturbOnTotalSilence />}
      contentStyle={{ borderColor: 'rgba(0, 0, 0, 0)' }}
    />
  </VerticalTimeline>
);

const orangeIcon: React.CSSProperties = {
  background: 'var(--bs-indigo)',
  color: 'var(--bs-orange)',
  boxShadow: '0 0 0 4px var(--bs-orange),inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  WebkitBoxShadow:
    '0 0 0 4px var(--bs-orange), inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)',
};

const orangeArrow: React.CSSProperties = {
  borderRight: '8px solid rgba(var(--bs-warning-rgb))',
};

const orangeElement: React.CSSProperties = {
  background: 'rgba(var(--bs-warning-rgb), 0.3)',
  borderColor: 'var(--bs-orange)',
};

const cyanIcon: React.CSSProperties = {
  background: 'var(--bs-indigo)',
  color: 'var(--bs-primary)',
  boxShadow:
    '0 0 0 4px var(--bs-primary),inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  WebkitBoxShadow:
    '0 0 0 4px var(--bs-primary), inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)',
};

const cyanArrow: React.CSSProperties = {
  borderRight: '8px solid rgba(var(--bs-primary-rgb))',
};

const cyanElement: React.CSSProperties = {
  background: 'rgba(var(--bs-primary-rgb), 0.3)',
  borderStyle: 'solid',
  borderColor: 'var(--bs-primary)',
};

const pinkIcon: React.CSSProperties = {
  background: 'var(--bs-indigo)',
  color: 'var(--bs-secondary)',
  boxShadow:
    '0 0 0 4px var(--bs-secondary),inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  WebkitBoxShadow:
    '0 0 0 4px var(--bs-secondary), inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)',
};

const pinkArrow: React.CSSProperties = {
  borderRight: '8px solid rgba(var(--bs-secondary-rgb))',
};

const pinkElement: React.CSSProperties = {
  background: 'rgba(var(--bs-secondary-rgb), 0.3)',
  borderColor: 'var(--bs-secondary)',
};

const contentStyles: Record<ExperienceType, React.CSSProperties> = {
  work: cyanElement,
  edu: pinkElement,
  other: orangeElement,
};

const contentArrowStyles: Record<ExperienceType, React.CSSProperties> = {
  work: cyanArrow,
  edu: pinkArrow,
  other: orangeArrow,
};

const iconStyles: Record<ExperienceType, React.CSSProperties> = {
  work: cyanIcon,
  edu: pinkIcon,
  other: orangeIcon,
};

const buttonVariants: Record<ExperienceType, string> = {
  work: 'outline-primary ms-2 mt-3',
  edu: 'outline-secondary ms-2 mt-3',
  other: 'outline-warning ms-2 mt-3',
};

const typeIcons: Record<ExperienceType, React.JSX.Element> = {
  work: <MdWork />,
  edu: <FaGraduationCap />,
  other: <IoLogoTableau />,
};
