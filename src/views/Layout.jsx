const React = require('react');

module.exports = function Layout({ user, children, title }) {
  return (
    <html className="h-full bg-gray-200" lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/normalize.css" />
        {/* <script defer src="/js/application.js" /> */}
        <title>Эпидневник</title>
      </head>

      <body className="h-full bg-gray-200">
        <nav>
          <div className="bg-white">
            <div className="border py-3 px-6">
              <div className="flex justify-between">
                <a id="MainPage" className="flex items-center" href="/">
                  <svg className="text-blue-600 w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  <span className="ml-2 font-semibold text-[#252C32]">Эпидневник</span>
                </a>
                {user ? (
                  <div className="ml-2 flex">
                    <a href={`/users/profile/${user.id}`} className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-[#4520aa]/10">
                      <span className="text-sm font-medium">Личный кабинет</span>
                    </a>
                    <a href="/users/logout" className="ml-2 flex cursor-pointer text-[#4520aa] items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-[#4520aa] hover:text-white">
                      <span className="text-sm font-medium">Выход</span>
                    </a>
                  </div>
                ) : (
                  <div className="ml-2 flex">
                    <a href="/users/profile" className="ml-2 flex cursor-pointer text-[#4520aa] items-center gap-x-1 rounded-md border py-2 px-4 text-blue-600 hover:bg-blue-600 hover:text-white">
                      <span className="text-sm font-medium">Личный кабинет</span>
                    </a>
                    <a href="/users/logout" className="ml-2 flex cursor-pointer text-[#4520aa] items-center gap-x-1 rounded-md border py-2 px-4 text-blue-600 hover:bg-blue-600 hover:text-white">
                      <span className="text-sm font-medium">Выход</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
};
