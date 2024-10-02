import { GrRadial, GrRadialSelected } from 'react-icons/gr';

export const Radial = ({ isChecked }: { isChecked: boolean }) =>
  isChecked ? <GrRadialSelected className="text-primary" /> : <GrRadial />;
