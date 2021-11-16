import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
const PageLink = ({ active, label, url }) => {
  return (
    <InertiaLink className="pagination" href={url}>
      <span dangerouslySetInnerHTML={{ __html: label }}></span>
    </InertiaLink>
  );
};

// Previous, if on first page
// Next, if on last page
// and dots, if exists (...)
const PageInactive = ({ label }) => {
  return <div className="" dangerouslySetInnerHTML={{ __html: label }} />;
};

export default ({ links = [] }) => {
  // dont render, if there's only 1 page (previous, 1, next)
  if (links.length === 3) return null;
  return (
    <div className="pagination">
      {links.map(({ active, label, url }) => {
        return url === null ? (
          <PageInactive key={label} label={label} />
        ) : (
          <PageLink
            className="page-link"
            key={label}
            label={label}
            active={active}
            url={url}
          />
        );
      })}
    </div>
  );
};
