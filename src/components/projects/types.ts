interface ProjectBase {
  title: string;
  banner: string;
  tags: string[];
  language: string;
  year: string;
  url: string;
  highlight: boolean;
  headline: string;
}

export interface InternalProject extends ProjectBase {
  target: '';
  skills: string;
  abstract: string;
  code_link: string;
  paper_link: string;
}

export interface ExternalProject extends ProjectBase {
  target: '_blank';
  skills?: string;
  abstract?: string;
  code_link?: string;
  paper_link?: string;
}

export type ProjectData = InternalProject | ExternalProject;

export type ProjectInfo = Pick<
  InternalProject,
  'title' | 'banner' | 'abstract' | 'skills' | 'code_link' | 'paper_link'
>;

export type ProjectCardInfo = Pick<
  ProjectBase,
  'title' | 'banner' | 'headline' | 'language' | 'year' | 'url'
> & { target: string };

export interface FooterSectionType {
  heading: string;
  desc: string;
}
