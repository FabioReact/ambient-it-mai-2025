import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router';
import { getHeroById } from '../api/heroes';
import HeroCard from '../components/HeroCard';
import HeroSkeletonCard from '../components/skeletons/HeroCardSkeleton';
import { useGetHeroByIdQuery } from '@/redux/services/heroes';

const HeroDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // const { data, isError, isFetching, isLoading, isSuccess } = useQuery({ queryKey: ['hero', id], queryFn: () => getHeroById(id!) })
  // hero, 2 -> Cache isLoading = false, isFetching = true
  const { data, isLoading, isError, isSuccess, isFetching } = useGetHeroByIdQuery(id!);

  return (
    <section>
      <h1>HeroDetails - ID: {id}</h1>
      {isFetching && 'Fetching...'}
      {isLoading && <HeroSkeletonCard />}
      {isError && <p>Error while fetching Hero #{id}</p>}
      {isSuccess && data && <HeroCard hero={data} /> }
      <button onClick={() => navigate(-1)}>Previous</button>
    </section>
  );
};

export default HeroDetails;
