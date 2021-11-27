import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { PercentNotEmitting } from '../utils/PercentNotEmitting';
import { PercentRenewable } from '../utils/PercentRenewable';

function Usage(): JSX.Element {
  const router = useRouter();
  let queryPostalCode = router.query.postalCode;
  console.log('queryPostalCode', queryPostalCode);

  queryPostalCode = typeof queryPostalCode === 'string' ? queryPostalCode : '';

  console.log('queryPostalCode', queryPostalCode);

  const [postalCode, setPostalCode] = useState(queryPostalCode);

  const [energyProfileInfo, setEnergyProfileInfo] = useState({
    energyProfile: {},
    isFetching: false,
  });

  useEffect(() => {
    const fetchEnergyProfile = async () => {
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
  }, [postalCode]);

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

  return (
    <Main
      meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}
      postalCode={postalCode}
      setPostalCode={(localPostalCode: string) =>
        setPostalCode(localPostalCode)
      }
    >
      {PercentRenewableComponent}
      {PercentNotEmittingComponent}
    </Main>
  );
}
// }
//
// const Usage = () => (
//   <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
//     <p>All about your energy usage!</p>
//     <p>
//       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
//       recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
//       voluptatibus distinctio recusandae autem esse explicabo molestias officia
//       placeat, accusamus aut saepe.
//     </p>
//   </Main>
// );

export default Usage;
