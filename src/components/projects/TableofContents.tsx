import React, { useState, useEffect, useRef } from 'react';
import '../../assets/css/stickytable.css';

interface HeadingData {
  id: string;
  title: string;
}

interface HeadingsProps {
  headings: HeadingData[];
  activeId: string | undefined;
}

const Headings = ({ headings, activeId }: HeadingsProps): React.JSX.Element => (
  <ul className="subtitle" style={{ paddingLeft: '0px', fontSize: '17px' }}>
    {headings.map((heading) => (
      <li key={heading.id} className={heading.id === activeId ? 'active' : ''}>
        <a
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(`#${heading.id}`)?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          {heading.title}
        </a>
      </li>
    ))}
  </ul>
);

export const TableOfContents = (): React.JSX.Element => {
  const [activeId, setActiveId] = useState<string | undefined>();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <nav className="tableofcontent" aria-label="Table of contents">
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};

const useHeadingsData = (): { nestedHeadings: HeadingData[] } => {
  const [nestedHeadings, setNestedHeadings] = useState<HeadingData[]>([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h2'));

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

const getNestedHeadings = (headingElements: HTMLHeadingElement[]): HeadingData[] => {
  const nestedHeadings: HeadingData[] = [];

  headingElements.forEach((heading) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title });
    }
  });

  return nestedHeadings;
};

const useIntersectionObserver = (
  setActiveId: React.Dispatch<React.SetStateAction<string | undefined>>
): void => {
  const headingElementsRef = useRef<Record<string, IntersectionObserverEntry>>({});
  useEffect(() => {
    const callback = (headings: IntersectionObserverEntry[]): void => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings: IntersectionObserverEntry[] = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string): number =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(b.target.id) - getIndexFromId(a.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -40% 0px',
    });

    const headingElements = Array.from(document.querySelectorAll('h2, h3'));

    headingElements.forEach((element) => {
      observer.observe(element);
    });

    return (): void => {
      observer.disconnect();
    };
  }, [setActiveId]);
};
