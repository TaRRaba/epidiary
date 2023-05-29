const React = require('react');

module.exports = function Layout({
  user, userDoc, Docs, children,
}) {
  return (
    <html className="bg-gray-200" lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <title>Эпидневник</title>
      </head>

      <body className="bg-gray-200">
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
                  <>
                    {userDoc ? (
                      <div className="docDiv">
                        <span className="mr-1 text-[#252C32]">Ваш врач:</span>
                        <span className="docValue visibility: visible self-center mr-3 font-semibold text-[#252C32]">{userDoc.fullName}</span>
                        <select className="docSelect visibility: hidden mr-3 rounded-md">
                          {Docs.map((el) => (
                            <option>{el.fullName}</option>
                          ))}
                        </select>
                        <button id="changeDoc" type="button" className="visibility: visible text-sm cursor-pointer rounded-lg bg-teal-600 px-4 py-1.5 text-white hover:bg-teal-500">Изменить</button>
                        <button id="saveDoc" type="button" className="visibility: hidden text-sm cursor-pointer rounded-lg bg-green-800 px-4 py-1.5 text-white hover:bg-green-700">Сохранить</button>
                      </div>
                    ) : (null)}
                    <div className="ml-2 flex">
                      {user.type === 'user' ? (
                        <a href={`/profile/${user.id}`} className="flex cursor-pointer border items-center gap-x-1 rounded-md py-2 px-4 hover:bg-blue-100">
                          <span className="text-sm font-medium">Личный кабинет</span>
                        </a>
                      ) : (
                        <a href={`/profileDoc/${user.id}`} className="flex cursor-pointer border items-center gap-x-1 rounded-md py-2 px-4 hover:bg-blue-100">
                          <span className="text-sm font-medium">Личный кабинет</span>
                        </a>
                      )}
                      <a href="/auth/logout" className="ml-2 flex cursor-pointer text-blue-700 items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-blue-700 hover:text-white">
                        <span className="text-sm font-medium">Выход</span>
                      </a>
                    </div>
                  </>
                ) : (null)}
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
      <div className="mt-36" />
    </html>
  );
};
