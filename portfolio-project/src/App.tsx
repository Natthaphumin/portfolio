import Experience from "./pages/experience";
import Preferences from "./pages/preferences";
import Profile from "./pages/profile";
import Skill from "./pages/skill";
import Vision from "./pages/vision";

const App = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <Profile />
      <Experience />
      <Preferences />
      <Skill />
      <Vision />
    </div>
  );
};

export default App;
