import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

export default function App() {
  const defaultProperties = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [properties, setProperties] = useState(() => {
    const commentsObj = localStorage.getItem("commentsObj");
    if (commentsObj !== null) {
      return JSON.parse(commentsObj);
    }
    return defaultProperties;
  });
  const updateFeedback = (feedbackType) =>
    setProperties({
      ...properties,
      [feedbackType]: (properties[feedbackType] += 1),
    });

  const totalFeedback = Object.values(properties).reduce(
    (akk, el) => akk + el,
    0
  );

  const handlerReset = () => setProperties(defaultProperties);
  const positiveFeedback = Math.round((properties.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("commentsObj", JSON.stringify(properties));
  }, [properties]);

  return (
    <>
      <Description />
      <Options
        value={properties}
        upDate={updateFeedback}
        totalValues={totalFeedback}
        reset={handlerReset}
      />
      {totalFeedback ? (
        <Feedback
          value={properties}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
