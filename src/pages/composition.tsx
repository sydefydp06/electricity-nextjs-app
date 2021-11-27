import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { PercentNotEmitting } from '../utils/PercentNotEmitting';
import { PercentRenewable } from '../utils/PercentRenewable';

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Composition(): JSX.Element {
  const router = useRouter();
  let queryPostalCode = router.query.postalCode;
  console.log('queryPostalCode', queryPostalCode);

  queryPostalCode = typeof queryPostalCode === 'string' ? queryPostalCode : '';

  console.log('queryPostalCode', queryPostalCode);

  const [postalCode, setPostalCode] = useState(queryPostalCode);
  const [runSearchPostalCode, setRunSearchPostalCode] = useState(0);

  console.log('postalCode', postalCode);

  const [energyProfileInfo, setEnergyProfileInfo] = useState({
    energyProfile: {},
    isFetching: false,
  });

  useEffect(() => {
    if (typeof queryPostalCode === 'string' && queryPostalCode.length > 0) {
      setPostalCode(queryPostalCode);
      setRunSearchPostalCode(runSearchPostalCode + 1);
    }
  }, [queryPostalCode]);

  useEffect(() => {
    const fetchEnergyProfile = async () => {
      console.log('Fetching with postal code:', postalCode);
      const fetchEnergyProfileURL = `https://test-container-name-wvwh44zn3a-uc.a.run.app/energy-profile/?postal_code=${postalCode}`;

      try {
        setEnergyProfileInfo({
          energyProfile: energyProfileInfo.energyProfile,
          isFetching: true,
        });
        const response = await axios.get(fetchEnergyProfileURL);
        setEnergyProfileInfo({
          energyProfile: response.data,
          isFetching: false,
        });
      } catch (exception) {
        // console.log(exception);
        setEnergyProfileInfo({
          energyProfile: energyProfileInfo.energyProfile,
          isFetching: false,
        });
      }
    };
    fetchEnergyProfile();
  }, [runSearchPostalCode]);

  console.log(energyProfileInfo);

  const pctRenewable = energyProfileInfo.energyProfile.percent_renewable;
  const PercentRenewableComponent = pctRenewable ? (
    <PercentRenewable percentRenewable={pctRenewable} />
  ) : (
    <div />
  );

  const pctNotEmitting = energyProfileInfo.energyProfile.percent_non_emitting;
  const PercentNotEmittingComponent = pctNotEmitting ? (
    <PercentNotEmitting percentNotEmitting={pctNotEmitting} />
  ) : (
    <div />
  );

  const provinceName = energyProfileInfo.energyProfile.province_name;
  const ProvinceNameComponent = provinceName ? (
    <div>You are located in: {capitalizeFirstLetter(provinceName)} </div>
  ) : (
    <div />
  );

  return (
    <Main
      meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}
      postalCode={postalCode}
      setPostalCode={(localPostalCode: string) =>
        setPostalCode(localPostalCode)
      }
      searchPostalCode={() => setRunSearchPostalCode(runSearchPostalCode + 1)}
    >
      {ProvinceNameComponent}
      {PercentRenewableComponent}
      {PercentNotEmittingComponent}
    </Main>
  );
}

export default Composition;
