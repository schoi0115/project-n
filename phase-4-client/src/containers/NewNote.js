import React, { useRef, useState } from "react";


import "./NewNote.css";

export default function NewNote() {
  const file = useRef(null);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return content.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

  return (
    <div className="NewNote">
      <form>
        <group controlId="content">
          <form
            value={content}
            as="textarea"
            onChange={(e) => setContent(e.target.value)}
          />
        </group>
        <group controlId="file">
          <label>Attachment</label>
          <control onChange={handleFileChange} type="file" />
        </group>
        <button
          block
          type="submit"
          size="lg"
          variant="primary"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Create
        </button>
      </form>
    </div>
  );
}