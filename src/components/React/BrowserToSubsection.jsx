import { subSection } from "../../utils/subsection";
import { Arrow } from "../../Icons/arrow";
import "./browserSubsection.css";

export function BrowserToSubsection({ url, id }) {
  return (
    <span className="back">
      <span
        onClick={() => {
          subSection(url, id);
        }}
      >
        <Arrow />
      </span>
    </span>
  );
}
