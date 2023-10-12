import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useBookCard = (id: string) => {
  const navigate = useNavigate();
  const handleRoteToDetailInfo = useCallback(() => {
    navigate(`/book/${id}`);
  }, []);

  return {
    handleRoteToDetailInfo,
  };
};
