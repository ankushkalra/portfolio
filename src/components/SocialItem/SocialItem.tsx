import React from "react";

const SocialItem = ({
  link,
  children,
  title,
}: {
  children: React.ReactNode;
  link: string;
  title: string;
}) => {
  return (
    <a href={link} title={title} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default SocialItem;
