import SvgSelector from "../../helpers/SvgSelector";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  return (
    <section>
      <div>
        <h2>Послуги</h2>
        <ul>
          <li>
            <SvgSelector id="uaMap" />
          </li>
          <li>
            <SvgSelector id="world" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
