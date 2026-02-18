import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import '../../assets/css/experience.css';
import '../../assets/css/font.css';
import { experience } from '../../content/Experience';

import React from 'react';
import { MdWork } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { MdDoNotDisturbOnTotalSilence } from 'react-icons/md';
import { IoLogoTableau } from 'react-icons/io5';
import Button from 'react-bootstrap/Button';

interface myState {}
interface myProps {}

class ExperienceTimeline extends React.Component<myProps, myState> {
  openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  render() {
    return (
      <VerticalTimeline className="temp" lineColor="var(--bs-white)">
        {experience.map((xp, index) => {
          return (
            <VerticalTimelineElement
              key={xp.title}
              contentStyle={
                xp.type === 'work'
                  ? cyan_element
                  : xp.type === 'edu'
                    ? pink_element
                    : orange_element
              }
              contentArrowStyle={
                xp.type === 'work' ? cyan_arrow : xp.type === 'edu' ? pink_arrow : orange_arrow
              }
              date={xp.start_year + ' - ' + xp.end_year}
              iconStyle={
                xp.type === 'work' ? cyan_icon : xp.type === 'edu' ? pink_icon : orange_icon
              }
              icon={
                xp.type === 'work' ? (
                  <MdWork />
                ) : xp.type === 'edu' ? (
                  <FaGraduationCap />
                ) : (
                  <IoLogoTableau />
                )
              }
            >
              <h3 className="mb-0 subtitle">
                <b>{xp.title}</b>
              </h3>
              <h5 className="mt-1 subtitle">{xp.company}</h5>
              {xp.description && (
                <h6 className="mt-4 paragraph" style={{ whiteSpace: 'pre-line' }}>
                  {xp.description}
                </h6>
              )}
              {xp.button &&
                xp.btn_info?.map((btn, index) => {
                  return xp.type === 'work' ? (
                    <Button
                      key={btn.button_text}
                      className="float-end"
                      onClick={() => {
                        this.openInNewTab(btn.button_link);
                      }}
                      size="sm"
                      variant="outline-primary ms-2 mt-3"
                    >
                      {btn.button_text}
                    </Button>
                  ) : xp.type === 'edu' ? (
                    <Button
                      key={btn.button_text}
                      className="float-end"
                      onClick={() => {
                        this.openInNewTab(btn.button_link);
                      }}
                      size="sm"
                      variant="outline-secondary ms-2 mt-3"
                    >
                      {btn.button_text}
                    </Button>
                  ) : (
                    <Button
                      key={btn.button_text}
                      className="float-end"
                      onClick={() => {
                        this.openInNewTab(btn.button_link);
                      }}
                      size="sm"
                      variant="outline-warning ms-2 mt-3"
                    >
                      {btn.button_text}
                    </Button>
                  );
                })}
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          iconStyle={{ background: 'var(--bs-indigo)', color: '#fff' }}
          icon={<MdDoNotDisturbOnTotalSilence />}
          contentStyle={{ borderColor: 'rgba(0, 0, 0, 0)' }}
        />
      </VerticalTimeline>
    );
  }
}

const orange_icon = {
  background: 'var(--bs-indigo)',
  color: 'var(--bs-orange)',
  boxShadow: '0 0 0 4px var(--bs-orange),inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)',
  WebkitBoxShadow:
    ' 0 0 0 4px var(--bs-orange), inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)',
};

const orange_arrow = {
  borderRight: '8px solid rgba(var(--bs-warning-rgb))',
};

const orange_element = {
  background: 'rgba(var(--bs-warning-rgb), 0.3)',
  borderColor: 'var(--bs-orange)',
};

const cyan_icon = {
  background: 'var(--bs-indigo)',
  color: 'var(--bs-primary)',
  boxShadow:
    '0 0 0 4px var(--bs-primary),inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)',
  WebkitBoxShadow:
    ' 0 0 0 4px var(--bs-primary), inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)',
};

const cyan_arrow = {
  borderRight: '8px solid rgba(var(--bs-primary-rgb))',
};

const cyan_element = {
  background: 'rgba(var(--bs-primary-rgb), 0.3)',
  borderStyle: 'solid 10px',
  borderColor: 'var(--bs-primary)',
};

const pink_icon = {
  background: 'var(--bs-indigo)',
  color: 'var(--bs-secondary)',
  boxShadow:
    '0 0 0 4px var(--bs-secondary),inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)',
  WebkitBoxShadow:
    ' 0 0 0 4px var(--bs-secondary), inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)',
};

const pink_arrow = {
  borderRight: '8px solid rgba(var(--bs-secondary-rgb))',
};

const pink_element = {
  background: 'rgba(var(--bs-secondary-rgb), 0.3)',
  borderColor: 'var(--bs-secondary)',
};

export default ExperienceTimeline;
