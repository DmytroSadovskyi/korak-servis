'use client'
import Link from "next/link";
import { ILinkToSectionProps } from "./props";
import { useScrollToSection } from "@/hooks/scrollToSection";

export const LinkToSection = ({ children, className, href }: ILinkToSectionProps) => {
  const scrollToSection = useScrollToSection();
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection(href.slice(1));
  };
  return (
    <Link href={href} className={className} onClick={handleAnchorClick}>
      {children}
    </Link>
  );
};
