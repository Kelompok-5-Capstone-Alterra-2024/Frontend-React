function PaginationDataArtikel({ currentPage, onPageChange }) {
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <div className="pt-5 w-full sm:w-auto overflow-x-auto">
      <div className="flex flex-wrap justify-between">
        <div className="pb-5">
          <span className="text-gray-500 text-md font-normal leading-[21px]">Showing </span>
          <span className="text-gray-900 text-md font-semibold leading-[21px]">1-10</span>
          <span className="text-gray-500 text-md font-normal leading-[21px]"> of </span>
          <span className="text-gray-900 text-md font-semibold leading-[21px]">100</span>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </button>
            </li>
            {[1, 2, 3, 4, 5].map((page) => (
              <li key={page}>
                <button
                  onClick={() => handlePageChange(page)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${
                    page === currentPage
                      ? 'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                      : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                  } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  {page}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === 5} // Adjust this according to your total pages
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default PaginationDataArtikel;