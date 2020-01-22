import React from "react";
import "./Story.css";
import {connect} from "react-redux"
import { doArchiveStory } from "../actions/archive";

const Story = ({ story, columns, onArchive }) => {
  const { title, url, author, num_comments, points, objectID } = story;
  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInline className="button-inline" onClick={() => onArchive(objectID)}>Archive</ButtonInline>
      </span>
    </div>
  );
};

const ButtonInline = ({ onClick,className, type = "button", children }) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id))
});

export default connect(null,mapDispatchToProps)(Story);
