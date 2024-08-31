interface TableProps {
  items?: Item[];
}

type Item = { label: string; value: string | number };

export default function Table({ items = [] }: TableProps) {
  return (
    <div className="flex flex-col gap-1">
      {items.map((item) => (
        <div key={item.label} className="flex">
          <label className="flex-[2] border-r-w border-r-[2px] border-r-slate-300 text-sm font-bold">
            {item.label}
          </label>
          <span className="flex-1 text-sm text-center">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
