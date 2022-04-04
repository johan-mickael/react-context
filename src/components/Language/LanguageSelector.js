import React, { useContext } from 'react';
import { LanguageContext } from '../../container/Context/Language';
import { languageOptions } from '../../languages';

export default function LanguageSelector() {
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);
    const handleLanguageChange = (e) => {
        userLanguageChange(e.target.value)
    };

    return (
        <div className="app__navbar-language">
            <img id="flag" src={languageOptions[userLanguage].flag} />
            <select
                onChange={handleLanguageChange}
                value={userLanguage}
            >
                {Object.entries(languageOptions).map(([id, name]) => (
                    <option key={id} value={id}>{name.label}</option>
                ))}
            </select>

        </div>
    );
};