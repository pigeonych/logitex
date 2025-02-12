import { FC, useEffect, useState } from "react";

const Welcome: FC<{}> = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Automatically remove the layer after the animation ends
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // 5 seconds for the welcome animation
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="welcome-layer">
      <video className="welcome-video" autoPlay muted playsInline>
        <source src="/videos/welcome.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Welcome;
