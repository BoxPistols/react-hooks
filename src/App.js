/**
 * https://locize.com/blog/react-i18next/
 * https://react.i18next.com/
 * https://www.gaji.jp/blog/2022/01/26/8976/
 * https://hygraph.com/blog/react-internationalization
 */

import React from "react";
import "./App.css";
import CounterHooks from "./components/CounterHooks";
import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "Englishや" },
  ja: { nativeName: "大和魂じゃ！" },
};

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {/*<Counter/>*/}
      <CounterHooks />
      <hr />
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <p>
        <Trans i18nKey="description.part1">Hello</Trans>
      </p>
      <p>{t("description.part2")}</p>
    </div>
  );
}

export default App;
