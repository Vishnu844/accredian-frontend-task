import hat from "../assets/hat-referral-benefits.png";

const Table = () => {
  const tableDetails = [
    {
      id: 1,
      title: "Professional Certificate Program in Product Management",
      referrerBonus: 7000,
      refereeBonus: 9000,
    },
    {
      id: 2,
      title: "PG Certificate Program in Strategic Product Management",
      referrerBonus: 9000,
      refereeBonus: 11000,
    },
    {
      id: 3,
      title: "Executive Program in Data Driven Product Management",
      referrerBonus: 10000,
      refereeBonus: 10000,
    },
    {
      id: 4,
      title:
        "Executive Program in Product Management and Digital Transformation",
      referrerBonus: 10000,
      refereeBonus: 10000,
    },
    {
      id: 5,
      title: "Executive Program in Product Management",
      referrerBonus: 10000,
      refereeBonus: 10000,
    },
    {
      id: 6,
      title: "Advanced Certification in Product Management",
      referrerBonus: 10000,
      refereeBonus: 10000,
    },
    {
      id: 7,
      title: "Advanced Certification in Product Management",
      referrerBonus: 10000,
      refereeBonus: 10000,
    },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full h-96 divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right bg-primary-light">
          <tr>
            <th className="px-4 py-2 font-semibold text-table-head-blue lg:whitespace-nowrap">
              Programs
            </th>
            <th className="px-4 py-2 font-semibold text-table-head-blue lg:whitespace-nowrap">
              Referrer Bonus
            </th>
            <th className="px-4 py-2 font-semibold text-table-head-blue lg:whitespace-nowrap">
              Referre Bonus
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {tableDetails.map((tableDetail) => {
            return (
              <tr className="odd:bg-gray-50" key={tableDetail.id}>
                <td className="px-4 py-2 font-medium text-gray-900 lg:whitespace-nowrap">
                  <div className="flex gap-3 items-center">
                    <img
                      src={hat}
                      alt={tableDetail.id}
                      width={24.05}
                      height={18}
                    />
                    <p>{tableDetail.title}</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-gray-700 lg:whitespace-nowrap">
                  {tableDetail.referrerBonus}
                </td>
                <td className="px-4 py-2 text-gray-700 lg:whitespace-nowrap">
                  {tableDetail.refereeBonus}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
