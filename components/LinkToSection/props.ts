export interface ILinkToSectionProps {
  children: React.ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}
