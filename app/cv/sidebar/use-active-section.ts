"use client";
import { useEffect, useRef, useState } from "react";

// Based on tutorial from https://netacci.hashnode.dev/how-to-highlight-active-navigation-on-scroll-in-react
const useActiveElement = (dataIdentifier: string) => {
  const [activeSection, setActiveSection] = useState<string>();
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    //create new instance and pass a callback function
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      //Update state with the visible section ID
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });

    //Get custom attribute data-section from all sections
    const sections = document.querySelectorAll(dataIdentifier);

    sections.forEach((section) => {
      observer.current?.observe(section);
    });
    //Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, [dataIdentifier]);

  return activeSection;
};

export default useActiveElement;
