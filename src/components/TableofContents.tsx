import { AnyTxtRecord } from 'dns';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import '../assets/css/stickytable.css';


const Headings = ({ headings, activeId }) => (
    <ul className="subtitle" style={{paddingLeft: "0px", fontSize: '18px'}}>
      {headings.map((heading) => (
        <li key={heading.id} className={heading.id === activeId ? "active" : ""}>
          <a href={`#${heading.id}`}
            onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${heading.id}`)!.scrollIntoView({
                  behavior: "smooth"
                });
              }}
          >{heading.title}</a>
        </li>
      ))}
    </ul>
);

const TableOfContents = () => {
    const [activeId, setActiveId] = useState();
    const { nestedHeadings } = useHeadingsData();
    useIntersectionObserver(setActiveId);

    return (
        <nav className="tableofcontent" aria-label="Table of contents">
            <Headings headings={nestedHeadings} activeId={activeId}/>
        </nav>
    );
};

interface HeadingData {id: any; title: any}

const useHeadingsData = () => {
    const [nestedHeadings, setNestedHeadings] = useState<HeadingData[]>([]);

    useEffect(() => {

      const headingElements = Array.from(
        document.querySelectorAll("h2")
      );

      const newNestedHeadings = getNestedHeadings(headingElements);
      setNestedHeadings(newNestedHeadings);
    }, []);

    return { nestedHeadings };
  };


const getNestedHeadings = (headingElements) => {
    const nestedHeadings: {id: any; title: any}[] = [];

    headingElements.forEach((heading, index) => {
      const { innerText: title, id } = heading;

      if (heading.nodeName === "H2") {
        nestedHeadings.push({ id: id, title: title });
      }
    });

    return nestedHeadings;
};

const useIntersectionObserver = (setActiveId) => {
    const headingElementsRef = useRef({});
    useEffect(() => {
      const callback = (headings) => {
        headingElementsRef.current = headings.reduce((map, headingElement) => {
          map[headingElement.target.id] = headingElement;
          return map;
        }, headingElementsRef.current);

        const visibleHeadings: any[] = [];
        Object.keys(headingElementsRef.current).forEach((key) => {
          const headingElement = headingElementsRef.current[key];
          if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
        });

        const getIndexFromId = (id) =>
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
        rootMargin: "0px 0px -40% 0px"
      });

      const headingElements = Array.from(document.querySelectorAll("h2, h3"));

      headingElements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    }, [setActiveId]);
  };

export default TableOfContents;
