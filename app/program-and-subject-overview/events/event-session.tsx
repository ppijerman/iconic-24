interface SessionProps {
  timeStart: string;
  timeEnd?: string;
  title: string;
  venue?: string;
  details?: React.ReactNode;
}
// Session Component
export function Session({
  timeStart,
  timeEnd,
  title,
  venue,
  details,
}: SessionProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 items-start">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
        <div className="text-4xl font-bold">{timeStart}</div>
        {timeEnd && (
          <div className="text-gray-500 dark:text-gray-400">- {timeEnd}</div>
        )}
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <h3 className="text-xl font-bold">{title}</h3>
        {venue && <p className="text-gray-500 dark:text-gray-400">{venue}</p>}
        {details && <div>{details}</div>}
      </div>
    </div>
  );
}
