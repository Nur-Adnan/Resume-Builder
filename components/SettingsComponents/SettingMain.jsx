import { motion, AnimatePresence } from "framer-motion";

import ContactBtn from "../UI Component/ContactBtn";
import CoffeBtn from "../UI Component/CoffeBtn";
import GithubBtn from "../UI Component/GithubBtn";
import SetEmpty from "../UI Component/SetEmpty";
import SetSample from "../UI Component/SetSample";
import TemplateSwitcher from "../UI Component/TemplateSwitcher";

const SettingMain = () => {
  return (
    <AnimatePresence>
      <motion.div layout className="cardStyle">
        <h1 className="text-2xl font-bold">Resume Builder</h1>
        <div className="mt-5">
          <p>
            Hello everyone! I'm a passionate Full Stack Developer with 3 years
            of experience in building scalable web applications. This project is
            designed to help others, and I'm actively working on adding new
            features and improving its design. Stay tuned for more updates and
            template designs! <br />
            <br /> If you find this project useful, your feedback is highly
            appreciated. You can also support my work by buying me a
            coffee—it’ll help me stay motivated and deliver even better
            features.
          </p>

          <div className="bg-sky-50 border-2 border-sky-700/50 px-2 mt-4 mb-2 pt-4 py-2 rounded-xl">
            <h1 className="text-sky-900 text-xl font-bold">Before using</h1>
            <ol className="list-none mt-2 text-sky-900 space-y-2">
              <li>
                ● The <strong>Reset</strong> button and the
                <strong> Fill Sample Data </strong>
                button will clear all the changes you have made and you cannot
                undo them.
              </li>
              <li>
                ● <strong>Contact me</strong> if you encounter any problems.
              </li>
              <li>
                ● Sometimes checkboxes don't work as they should.
                <strong> Just click twice for it to work properly.</strong>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex space-x-2 ">
            <SetEmpty />
            <SetSample />
          </div>
          <motion.div
            layout
            className="w-44 h-1 mx-auto mt-2 bg-gray-200 rounded-full"
          />
          <div className="flex space-x-2 mt-2">
            <ContactBtn />

            <GithubBtn />
          </div>
          <div className="mt-2">
            <CoffeBtn />
          </div>

          <div className="mt-5">
            <h1 className="text-xl font-bold">Templates</h1>
            <div className="flex flex-row space-x-4 mt-2">
              <TemplateSwitcher value={1} />
              <TemplateSwitcher value={2} />
              <TemplateSwitcher value={3} />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SettingMain;
