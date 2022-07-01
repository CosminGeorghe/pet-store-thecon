import React, { useState } from "react";

import Tag from "./Tag";

function Tags(props) {
  const [tags, setTags] = useState(props.tags);

  let showDeleteBtn;
  if (tags.length === 1) showDeleteBtn = false;
  else showDeleteBtn = true;

  console.log(tags);

  function handleTagId(value, index) {
    const newTags = tags;
    newTags[index].id = value;
    setTags(newTags);
    console.log(newTags);
    props.updateDataTags(newTags);
  }

  function handleTagName(value, index) {
    const newTags = tags;
    newTags[index].name = value;
    setTags(newTags);
    console.log(newTags);
    props.updateDataTags(newTags);
  }

  function addTag() {
    const newTags = tags;
    newTags.push({ id: "", name: "" });
    setTags(newTags);
    props.updateDataTags(tags);
    console.log(newTags);
  }

  function deleteTag(index) {
    const newTags = tags;
    newTags.splice(index, 1);
    setTags(newTags);
    props.updateDataTags(tags);
    console.log(tags);
  }

  return (
    <div>
      {tags.map((tag, index) => (
        <Tag
          key={index}
          index={index}
          showDeleteBtn={showDeleteBtn}
          onChangeId={handleTagId}
          onChangeName={handleTagName}
          onDelete={deleteTag}
          tag={tag}
        />
      ))}
      <button type="button" onClick={addTag} className="btn btn-primary">
        Adauga Tag
      </button>
    </div>
  );
}

export default Tags;
