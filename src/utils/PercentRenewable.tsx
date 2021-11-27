import { LinearProgressWithLabel } from './PercentNotEmitting';

type PercentRenewableProps = {
  percentRenewable: number | string | undefined;
};

const PercentRenewable = (props: PercentRenewableProps) => {
  const displayPercent =
    typeof props.percentRenewable === 'number' ? props.percentRenewable : 0;

  return (
    <div className="pt-8 pb-8">
      <div>Percent Renewable</div>
      <div className="h-4 w-1/2">
        <LinearProgressWithLabel
          className="h-4"
          value={displayPercent.toFixed(2) * 100}
        />
      </div>
    </div>
  );
};

export { PercentRenewable };

// type PercentRenewableProps = {
//   percentRenewable: number | string | undefined;
// };
//
// const PercentRenewable = (props: PercentRenewableProps) => {
//   console.log('props.percentRenewable', props.percentRenewable);
//
//   const displayPercent =
//     typeof props.percentRenewable === 'number' ? props.percentRenewable : 0;
//
//   return <div>Percent Renewable: {displayPercent.toFixed(2)}</div>;
// };
//
// export { PercentRenewable };
