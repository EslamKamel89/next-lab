import { use } from "react";

const MealsSlug: React.FC<{ params: Promise<{ slug: string }> }> = ({
  params,
}) => {
  return (
    <div>
      <h1>MealsSlug</h1>
      <div>{use(params).slug}</div>
    </div>
  );
};

export default MealsSlug;
