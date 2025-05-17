import { Timeline } from "../components/certificate_Timeline";
import { Certificate } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full">
      <Timeline data={Certificate} />
    </div>
  );
};

export default Experiences;
