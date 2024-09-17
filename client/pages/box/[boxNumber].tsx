import { useRouter } from 'next/router';

const BoxDetails = () => {
  const router = useRouter();
  const { boxNumber } = router.query;  // Get the dynamic box number from the URL

  return (
    <div className="p-10">
      <h1 className="text-3xl">Details for Box {boxNumber}</h1>
      <p>This page displays the content for Box {boxNumber}.</p>
    </div>
  );
};

export default BoxDetails;
