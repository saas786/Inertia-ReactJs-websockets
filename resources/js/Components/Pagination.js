import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
const PageLink = ({ active, label, url }) => {
  return (
    <InertiaLink className="page-link" href={url}>
      <span dangerouslySetInnerHTML={{ __html: label }}></span>
    </InertiaLink>
  );
};

// Previous, if on first page
// Next, if on last page
// and dots, if exists (...)
const PageInactive = ({ label }) => {
  return (
    <div className="page-item disabled">
      {" "}
      <div className="page-link" dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  );
};

export default ({ links = [] }) => {
  // dont render, if there's only 1 page (previous, 1, next)
  if (links.length === 3) return null;
  return (
    <ul className="pagination">
      {links.map(({ active, label, url }) => {
        return url === null ? (
          <li key={label} className="page-item">
            <PageInactive key={label} label={label} className="page-link" />
          </li>
        ) : (
          <li key={label} className="page-item">
            <PageLink
              className="active"
              label={label}
              active={active}
              url={url}
            />
          </li>
        );
      })}
    </ul>
  );
};
