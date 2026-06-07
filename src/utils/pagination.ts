export const getPagination = (page: number, limit: number) => {
  const currentPage = Number(page) || 1;

  const pageSize = Number(limit) || 10;

  const offset = (currentPage - 1) * pageSize;

  return {
    offset,
    limit: pageSize,
  };
};
