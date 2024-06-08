function PaginationDetailOrganizationVolunteer() {
    return (
      <div className="w-full sm:w-auto overflow-x-auto p-5">
          <div className="flex flex-wrap justify-between">
              <div className="pb-2">
                  <span className="text-gray-500 text-md font-normal leading-[21px]">Showing </span>
                  <span className="text-gray-900 text-md font-semibold leading-[21px]">1-10</span>
                  <span className="text-gray-500 text-md font-normal leading-[21px]"> of </span>
                  <span className="text-gray-900 text-md font-semibold leading-[21px]">1000</span>
              </div>
              <nav aria-label="Page navigation example">
                  <ul className="inline-flex -space-x-px text-sm">
                      <li>
                          <a
                          href="#"
                          className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                          Previous
                      </a>
                      </li>
                      <li>
                          <a
                          href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            1
                          </a>
                      </li>
                      <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            2
                          </a>
                      </li>
                      <li>
                          <a
                            href="#"
                            aria-current="page"
                            className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                          >
                            3
                          </a>
                      </li>
                      <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            4
                          </a>
                      </li>
                      <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            5
                          </a>
                      </li>
                      <li>
                          <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            Next
                          </a>
                      </li>
                  </ul>
              </nav>
          </div>    
      </div>
    )
  }
  
  export default PaginationDetailOrganizationVolunteer;