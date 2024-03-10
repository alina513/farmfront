import React from 'react';
import { useSelector } from 'react-redux';
import { Drug } from 'components/Drug/Drug';
import { selectDrugs } from '../../redux/selectors';
import css from "./DrugList.module.css"

export const DrugsList = () => {
  const drugs = useSelector(selectDrugs);
  return (
    <ul className={css.list}>
      {drugs.map(drug => (
        <Drug value={drug} key={drug.id} />
      ))}
    </ul>
  );
};
