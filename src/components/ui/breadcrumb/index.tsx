import Link from "next/link";

interface BreadcrumbProps {
  pageList: {
    name: string;
    href: string;
  }[];
}
export default function Breadcrumb({ pageList }: BreadcrumbProps) {
  return (
    <nav
      className="justify-between rounded-lg border border-secondary  px-4 py-2 sm:flex sm:px-5"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 sm:mb-0 md:space-x-3">
        {pageList?.map((page, index) => {
          const first = index === 0;
          const last = index === pageList.length - 1;

          if (first) {
            return (
              <li key={page.name}>
                <div className="flex items-center">
                  <Link
                    href={page.href}
                    className="ml-1 text-sm text-secondary font-medium md:ml-2"
                  >
                    {page.name}
                  </Link>
                </div>
              </li>
            );
          }

          if (last) {
            return (
              <li aria-current="page" key={page.href}>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 text-muted"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="mx-1 text-sm font-medium text-primary md:mx-2">
                    {page.name}
                  </span>
                </div>
              </li>
            );
          }

          return (
            <li aria-current="page" key={page.name}>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a
                  href={page.href}
                  className="ml-1 text-sm font-medium md:ml-2"
                >
                  {page.name}
                </a>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
