import { useState } from "react";
import ReactMarkdown from "react-markdown";

import { type Note } from "@prisma/client";
type propTypes = {
  note: Note;
  onDelete: () => void;
};

export const NoteCard = ({ note, onDelete }: propTypes) => {
  const [isExpaneded, setIsExpanded] = useState(true);

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body m-0 p-3">
        <div
          className={`collapse-arrow ${
            isExpaneded ? "collapse-open" : ""
          } collapse`}
          onClick={() => setIsExpanded(!isExpaneded)}
        >
          <div className="collapse-title text-xl font-bold">{note?.title}</div>
          <div className="collapse-content">
            <article className="prose lg:prose-xl">
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </article>
          </div>
        </div>
        <div className="card-actions mx-2 flex justify-end">
          <button className="btn-warning btn-xs btn px-5" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
