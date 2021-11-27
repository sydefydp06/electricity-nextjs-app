import Box from '@mui/material/Box';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

type PercentNotEmittingProps = {
  percentNotEmitting: number | string | undefined;
};

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const PercentNotEmitting = (props: PercentNotEmittingProps) => {
  const displayPercent =
    typeof props.percentNotEmitting === 'number' ? props.percentNotEmitting : 0;

  return (
    <div className="pt-8 pb-8">
      <div>Percent Not Emitting</div>
      <div className="h-4 w-1/2">
        <LinearProgressWithLabel
          className="h-4"
          value={displayPercent.toFixed(2) * 100}
        />
      </div>
    </div>
  );
};

export { PercentNotEmitting, LinearProgressWithLabel };
