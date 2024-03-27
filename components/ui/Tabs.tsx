import classNames from "@/utils/makeClassNames";

export type TabType = {
  name: string;
  href: string;
  current: boolean;
}[];

type Props = {
  label: string,
  tabs: string[];
  activeTab: number;
  handleChange: React.Dispatch<React.SetStateAction<any>>;
};

export default function Tabs({ label, tabs, activeTab, handleChange }: Props) {
  return (
    <div className="relative mb-4 sm:top-[10px] sm:mb-0">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="">
          {label}
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          defaultValue={0}
          onChange={(e) => handleChange(e.target.selectedIndex)}
        >
          {tabs.map((tab, i) => (
            <option key={tab} value={i}>
              {tab}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav
          className="isolate flex divide-x divide-gray-200 rounded-lg"
          aria-label="Tabs"
        >
          {tabs.map((tab, tabIdx) => (
            <div
              onClick={() => handleChange(tabIdx)}
              key={tab}
              className={classNames(
                tabIdx === activeTab
                  ? "text-gray-900 bg-gray-50"
                  : "text-gray-500 hover:text-gray-700",
                tabIdx === 0 ? "rounded-tl-lg" : "",
                tabIdx === tabs.length - 1 ? "rounded-tr-lg" : "",
                "border-b-[1px] cursor-pointer group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-200 focus:z-10"
              )}
              aria-current={tabIdx === activeTab ? "page" : undefined}
            >
              <span className="cursor-pointer">{tab}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tabIdx === activeTab ? "bg-blue-500" : "bg-transparent",
                  "absolute inset-x-0 bottom-0 h-1 "
                )}
              />
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
